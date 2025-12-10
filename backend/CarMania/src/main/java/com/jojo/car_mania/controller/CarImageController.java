package com.jojo.car_mania.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jojo.car_mania.dto.CarImageCreationDTO;
import com.jojo.car_mania.entity.CarImage;
import com.jojo.car_mania.service.CarImageService;

import jakarta.validation.Valid;


@RestController
@RequestMapping("api/images")
public class CarImageController {
    
    private final CarImageService carImageService;

    public CarImageController(CarImageService carImageService) {
        this.carImageService = carImageService;
    }

    @GetMapping("/{carId}")
    public ResponseEntity<?> getImages(@PathVariable Long carId) {
        List<CarImage> images = carImageService.getByCarId(carId);

        return ResponseEntity.ok(images);
    }

    @PostMapping
    public ResponseEntity<?> createImage(@Valid @RequestBody CarImageCreationDTO dto) {
        CarImage image = carImageService.create(dto);
        
        return ResponseEntity.ok(image);
    }
}
