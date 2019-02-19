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
        UserResponse userResponse = new UserResponse(currentUser.getId(), currentUser.getUsername(), currentUser.getName());
        return userResponse;
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

        UserProfile userProfile = new UserProfile(user.getId(), user.getUsername(), user.getName(), user.getEmail());

        return userProfile;
    }

    @GetMapping("/users/favorites/{username}")
    public UserResponse getUserFavorites(@PathVariable(value = "username") String username){
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException("User", "username", username));

        Set<Foodtruck> foodtruckList = user.getFoodTrucks();

        UserResponse userFavorites = new UserResponse(foodtruckList);

        return userFavorites;
    }
}
