package com.jojo.car_mania.controller;

import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jojo.car_mania.dto.CarRequestDTO;
import com.jojo.car_mania.entity.Car;
import com.jojo.car_mania.service.CarService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/cars")
@CrossOrigin(origins = "http://localhost:5173")
public class CarController {

    private final CarService carService;

    public CarController(CarService carService) {
        this.carService = carService;
    }

    @GetMapping
    public ResponseEntity<?> getCars() {
        List<Car> cars = carService.getAll();
        return ResponseEntity.ok(cars);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<?> getCar(@PathVariable Long id) {
        try {
            Car car = carService.getById(id);
            return ResponseEntity.ok(car);
        } catch (NoSuchElementException e) {
            return ResponseEntity.status(404).body(e.getMessage());
        }
    }

    @PostMapping
    public ResponseEntity<?> createCar(@Valid @RequestBody CarRequestDTO dto) {
        Car car = carService.create(dto);
        return ResponseEntity.status(201).body(car);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateCar(@PathVariable Long id, @Valid @RequestBody CarRequestDTO dto) {
        try { 
            Car car = carService.update(id, dto);
            return ResponseEntity.ok(Map.of(
                "Car", car,
                "Message", "Car updated successfully"
            ));
        } catch (NoSuchElementException e) {
            return ResponseEntity.status(404).body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCar(@PathVariable Long id) {
        try {
            carService.delete(id);
            return ResponseEntity.ok("Car deleted successfully");
        } catch (NoSuchElementException e) {
            return ResponseEntity.status(404).body(e.getMessage());
        }
    }
    
}
