package com.razor.foodtruck.controllers;

import com.razor.foodtruck.models.Foodtruck;
import com.razor.foodtruck.models.FoodtruckRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/foodtruck")
public class FoodtruckController {

    @Autowired
    FoodtruckRepository foodtruckRepository;

    @RequestMapping(method= RequestMethod.GET, value="/foodtrucks")
    public Iterable<Foodtruck> index() {
        return foodtruckRepository.findAll();
    }

    @RequestMapping(method=RequestMethod.POST, value="/foodtrucks")
    public Foodtruck save(@RequestBody Foodtruck foodtruck) {
        foodtruckRepository.save(foodtruck);
        return foodtruck;
    }

    @RequestMapping(method=RequestMethod.GET, value="/foodtrucks/{id}")
    public Optional<Foodtruck> show(@PathVariable Long id) {
        return foodtruckRepository.findById(id);
    }

    @RequestMapping(method=RequestMethod.DELETE, value="/foodtrucks/{id}")
    public String delete(@PathVariable Long id) {
        Optional<Foodtruck> optionalFoodtruck = foodtruckRepository.findById(id);
        Foodtruck foodtruck = optionalFoodtruck.get();
        foodtruckRepository.delete(foodtruck);

        return "";
    }

    @RequestMapping(method=RequestMethod.GET, value="/foodtrucks/{name}")
    public Optional<Foodtruck> show(@PathVariable String name){
        return foodtruckRepository.findByName(name);
    }
}
