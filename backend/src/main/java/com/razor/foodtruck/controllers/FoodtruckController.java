package com.razor.foodtruck.controllers;

import com.razor.foodtruck.exception.ResourceNotFoundException;
import com.razor.foodtruck.models.Foodtruck;
import com.razor.foodtruck.models.FoodtruckRepository;
import com.razor.foodtruck.models.UserRepository;
import com.razor.foodtruck.requests.ApiResponse;
import com.razor.foodtruck.requests.FoodtruckRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.Optional;

@RestController
@RequestMapping("/api/")
public class FoodtruckController {

    @Autowired
    FoodtruckRepository foodtruckRepository;

    @Autowired
    UserRepository userRepository;

    @GetMapping("foodtrucks")
    public Iterable<Foodtruck> index() {
        return foodtruckRepository.findAll();
    }

    @PostMapping("foodtrucks/add")
    @PreAuthorize("hasRole('OWNER')")
    public ResponseEntity<?>  addFoodtruck(@RequestBody FoodtruckRequest foodtruckRequest) {
        if(foodtruckRepository.existsByName(foodtruckRequest.getName())) {
            return new ResponseEntity(new ApiResponse(false, "Foodtruck is already in tbe system!"),
                    HttpStatus.BAD_REQUEST);
        }

        Foodtruck foodtruck = new Foodtruck(foodtruckRequest.getName(), foodtruckRequest.getAddress(),
                                            foodtruckRequest.getStatus(), foodtruckRequest.getRating());

        Foodtruck result = foodtruckRepository.save(foodtruck);

        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/api/foodtrucks/{id}")
                .buildAndExpand(result.getId()).toUri();

        return ResponseEntity.created(location).body(new ApiResponse(true, "Foodtruck successfully added!"));
    }

    @PostMapping("foodtrucks/delete/{id}")
    @PreAuthorize("hasRole('OWNER')")
    public String deleteFoodtruck(@PathVariable(value = "id") Long id) {
        Foodtruck foodtruck = foodtruckRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Foodtruck", "id", id));

        foodtruckRepository.delete(foodtruck);

        return "Foodtruck successfully deleted!";
    }

    @GetMapping("foodtrucks/{id}")
    public Foodtruck getFoodtruck(@PathVariable(value = "id") Long id) {
        Foodtruck foodtruck = foodtruckRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Foodtruck", "id", id));

        return new Foodtruck(foodtruck.getName(), foodtruck.getAddress(), foodtruck.getStatus(), foodtruck.getRating());
    }

    @GetMapping("foodtrucks/{name}")
    public Optional<Foodtruck> show(@PathVariable String name){
        return foodtruckRepository.findByName(name);
    }
}
