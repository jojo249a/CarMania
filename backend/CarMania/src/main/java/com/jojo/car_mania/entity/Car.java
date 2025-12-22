package com.jojo.car_mania.entity;

import java.time.LocalDateTime;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
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

    @Column(columnDefinition = "TEXT", nullable = true)
    private String description;

    private String make;

    private String model;
    
    private Integer year;

    private Integer mileage;

    @Column(name = "fuel_type")
    private String fuelType;

    @Column(name = "engine_size", nullable = true)
    private Double engineSize;

    private Integer power;

    private String drivetrain;

    private String transmission;
    
    private String color;

    @Column(name = "body_style")
    private String bodyStyle;

    private Integer price;
    
    private String location;

    private String status;

    @Column(unique = true, nullable = true)
    private String slug;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @OneToMany(mappedBy = "car", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<CarImage> carImages;

    @ManyToMany
    @JoinTable(
        name = "car_equipment",
        joinColumns = @JoinColumn(name = "car_id"),
        inverseJoinColumns = @JoinColumn(name = "equipment_id")
    )
    @JsonManagedReference
    private List<Equipment> equipment;
}
