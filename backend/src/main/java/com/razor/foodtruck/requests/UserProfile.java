package com.razor.foodtruck.requests;

import lombok.Data;

@Data
public class UserProfile {
    private Long id;
    private String username;
    private String name;
    private String email;

    public UserProfile(Long id, String username, String name, String email) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.email = email;
    }
}