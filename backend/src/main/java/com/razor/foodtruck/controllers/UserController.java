package com.razor.foodtruck.controllers;

import com.razor.foodtruck.exception.ResourceNotFoundException;
import com.razor.foodtruck.models.Foodtruck;
import com.razor.foodtruck.models.User;
import com.razor.foodtruck.models.UserRepository;
import com.razor.foodtruck.requests.UserAvailability;
import com.razor.foodtruck.requests.UserProfile;
import com.razor.foodtruck.requests.UserResponse;
import com.razor.foodtruck.security.CurrentUser;
import com.razor.foodtruck.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public UserResponse getCurrentUser(@CurrentUser UserPrincipal currentUser) {
        return new UserResponse(currentUser.getId(), currentUser.getUsername(), currentUser.getName());
    }

    @GetMapping("/user/checkUsernameAvailability")
    public UserAvailability checkUsernameAvailability(@RequestParam(value = "username") String username) {
        Boolean isAvailable = !userRepository.existsByUsername(username);
        return new UserAvailability(isAvailable);
    }

    @GetMapping("/user/checkEmailAvailability")
    public UserAvailability checkEmailAvailability(@RequestParam(value = "email") String email) {
        Boolean isAvailable = !userRepository.existsByEmail(email);
        return new UserAvailability(isAvailable);
    }

    @GetMapping("/users/{username}")
    public UserProfile getUserProfile(@PathVariable(value = "username") String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException("User", "username", username));

        return new UserProfile(user.getId(), user.getUsername(), user.getName(), user.getEmail());
    }

    @GetMapping("users/favorites/")
    public UserResponse getUserFavorites(@CurrentUser UserPrincipal currentUser){
        UserResponse userResponse = getCurrentUser(currentUser);

        Set<Foodtruck> foodtruckList = userResponse.getFoodtrucks();

        return new UserResponse(foodtruckList);
    }

    @GetMapping("/users/favorites/{username}")
    public UserResponse getOtherUserFavorites(@PathVariable(value = "username") String username){
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException("User", "username", username));

        Set<Foodtruck> foodtruckList = user.getFoodTrucks();

        return new UserResponse(foodtruckList);
    }
}
