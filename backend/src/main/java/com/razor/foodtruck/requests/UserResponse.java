package com.razor.foodtruck.requests;

import com.razor.foodtruck.models.Foodtruck;
import lombok.Data;

import java.util.Set;

@Data
public class UserResponse {
    private Long id;
    private String username;
    private String name;
    private String email;
    private Set<Foodtruck> foodtrucks;

    public UserResponse(Long id, String username, String name) {
        this.id = id;
        this.username = username;
        this.name = name;
    }

    public UserResponse(Long id, String username, String name, String email) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.email = email;
    }

    public UserResponse(Set<Foodtruck> foodtrucks){
        this.foodtrucks = foodtrucks;
    }
}
