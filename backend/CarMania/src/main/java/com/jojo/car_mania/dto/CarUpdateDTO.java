package com.jojo.car_mania.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CarUpdateDTO {
    private String image;
    private String description;
    private String features;
    private String make;
    private String model;
    private Integer year;
    private Integer mileage;
    private String fuelType;
    private Integer power;
    private String drivetrain;
    private String transmission;
    private String color;
    private String bodyStyle;
    private Double price;
    private String location;
    private Double engineSize;
}
