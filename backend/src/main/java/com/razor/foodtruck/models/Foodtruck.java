package com.razor.foodtruck.models;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.NaturalId;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Data // getter / setters for all
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "foodtrucks")
public class Foodtruck {

    @Id
    @GeneratedValue
    private Long id;

    @NaturalId
    @NotBlank
    private String name;

    @NotBlank
    private String address;

    private Boolean status;

    private Integer rating;

    public Foodtruck(String name, String address, Boolean status, Integer rating){
        this.name = name;
        this.address = address;
        this.status = status;
        this.rating = rating;
    }
}
