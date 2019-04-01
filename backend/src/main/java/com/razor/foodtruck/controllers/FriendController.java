package com.razor.foodtruck.controllers;

import com.razor.foodtruck.exception.ResourceNotFoundException;
import com.razor.foodtruck.models.Friend;
import com.razor.foodtruck.models.FriendRepository;
import com.razor.foodtruck.models.User;
import com.razor.foodtruck.models.UserRepository;
import com.razor.foodtruck.requests.FriendResponse;
import com.razor.foodtruck.requests.UserResponse;
import com.razor.foodtruck.security.CurrentUser;
import com.razor.foodtruck.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.handler.UserRoleAuthorizationInterceptor;

import java.util.Iterator;
import java.util.Set;

@RestController
@RequestMapping("/api")
public class FriendController {
    @Autowired
    FriendRepository friendRepository;

    @Autowired
    UserRepository userRepository;

//    @GetMapping("/friends")
//    public UserResponse getFriends(@CurrentUser UserPrincipal currentUser) {
//        Long currentUserId = currentUser.getId();
//        User user = userRepository.findById(currentUserId)
//                .orElseThrow(() -> new ResourceNotFoundException("Id", "id", currentUserId));
//
//        Set<Friend> friendsList = user.getFriends();
//        return new UserResponse.setFriends(friendsList);
//    }
}
