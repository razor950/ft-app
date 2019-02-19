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
import javax.validation.constraints.NotNull;

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
    @NotNull
    private String name;

    @NotNull
    private String address; // note: google markers take in lat and lng

    private Integer rating;

    private Boolean status;


//    private float latitude;
//    private float longitude;
}
