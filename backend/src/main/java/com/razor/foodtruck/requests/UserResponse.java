package com.razor.foodtruck.requests;

import com.razor.foodtruck.models.Foodtruck;

import java.util.Set;

public class UserResponse {
    private Long id;
    private String username;
    private String name;
    private Set<Foodtruck> foodtrucks;

    public UserResponse(Long id, String username, String name) {
        this.id = id;
        this.username = username;
        this.name = name;
    }

    public UserResponse(Set<Foodtruck> foodtrucks){
        this.foodtrucks = foodtrucks;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Foodtruck> getFoodtrucks() {
        return foodtrucks;
    }

    public void setFoodtrucks(Set<Foodtruck> foodtrucks) {
        this.foodtrucks = foodtrucks;
    }
}
