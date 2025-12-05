package com.jojo.car_mania.entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.jojo.car_mania.entity.enums.BodyStyle;
import com.jojo.car_mania.entity.enums.Drivetrain;
import com.jojo.car_mania.entity.enums.FuelType;
import com.jojo.car_mania.entity.enums.Location;
import com.jojo.car_mania.entity.enums.Transmission;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "cars")
public class Car {
    @Id
    @GeneratedValue
    private Long id;

    private String image;

    @Column(nullable = true)
    private String description;

    private String features;

    private String make;

    private String model;
    
    private Integer year;

    private Integer mileage;

    @Enumerated(EnumType.STRING)
    @Column(name = "fuel_type")
    private FuelType fuelType;

    @Column(name = "engine_size", nullable = true)
    private String engineSize;

    private Integer power;

    @Enumerated(EnumType.STRING)
    private Drivetrain drivetrain;

    @Enumerated(EnumType.STRING)
    private Transmission transmission;
    
    private String color;

    @Enumerated(EnumType.STRING)
    @Column(name = "body_style")
    private BodyStyle bodyStyle;

    private Double price;
    
    @Enumerated(EnumType.STRING)
    private Location location;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
