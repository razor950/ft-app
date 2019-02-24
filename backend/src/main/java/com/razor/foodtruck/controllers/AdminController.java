package com.razor.foodtruck.controllers;

import com.razor.foodtruck.exception.AppException;
import com.razor.foodtruck.exception.ResourceNotFoundException;
import com.razor.foodtruck.models.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;

@RestController
@RequestMapping("/api")
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @PutMapping("/admin/{id}/{roleid}")
    public String updateUserRole(@PathVariable(value = "id") Long id, @PathVariable(value = "roleid") Long roleId){
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Id", "id", id));

        Role userRole = roleRepository.findById(roleId)
                .orElseThrow(() -> new AppException("User Role not set."));

        user.setRoles(Collections.singleton(userRole));


        return "User role successfully changed!";
    }
}
