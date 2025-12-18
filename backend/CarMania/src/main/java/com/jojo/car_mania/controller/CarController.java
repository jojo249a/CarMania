package com.jojo.car_mania.controller;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jojo.car_mania.dto.CarCreationDTO;
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
    public ResponseEntity<List<Car>> getCars(
        @RequestParam(required = false) String status,
        @RequestParam(required = false) String make,
        @RequestParam(required = false) Integer count) {

        List<Car> cars = carService.getFiltered(status, make, count);

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
    public ResponseEntity<Car> createCar(@Valid @RequestBody CarCreationDTO dto) {
        Car car = carService.create(dto);

        return ResponseEntity.status(201).body(car);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCar(@PathVariable Long id) {
        try {
            carService.delete(id);
            return ResponseEntity.ok("Car deleted successfully");
        } catch (NoSuchElementException e) {
            return ResponseEntity.status(404).body(e.getMessage());
        }
    }
    
    @GetMapping("/count")
    public ResponseEntity<Long> getCountByStatus(@RequestParam String status) {
        Long count = carService.getCountByStatus(status);

        return ResponseEntity.ok(count);
    }

    @GetMapping("/makes")
    public ResponseEntity<List<String>> getMakesByStatus(@RequestParam String status) {
        List<String> makes = carService.getMakesByStatus(status);

        return ResponseEntity.ok(makes);
    }

    @GetMapping("/car")
    public ResponseEntity<?> getCarBySlug(@RequestParam String slug) {
        try {
            Car car = carService.getBySlug(slug);
            return ResponseEntity.ok(car);
        } catch (NoSuchElementException e) {
            return ResponseEntity.status(404).body(e.getMessage());
        }
    }
    
}
