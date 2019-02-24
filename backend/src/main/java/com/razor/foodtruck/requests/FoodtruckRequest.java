package com.razor.foodtruck.requests;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class FoodtruckRequest {

    @NotBlank
    private String name;

    @NotBlank
    private String address;

    @NotBlank
    private Boolean status;

    @NotBlank
    private Integer rating;
}
