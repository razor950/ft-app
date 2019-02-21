package com.razor.foodtruck.models;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FoodtruckRepository extends JpaRepository<Foodtruck, Long> {
    @Override
    void delete(Foodtruck deleted);

    Optional<Foodtruck> findByName(String name);
    //Optional<Foodtruck> findByEmail(String email);

    Boolean existsByName(String name);
}
