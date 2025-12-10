package com.jojo.car_mania.service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.jojo.car_mania.dto.CarCreationDTO;
import com.jojo.car_mania.entity.Car;
import com.jojo.car_mania.repository.CarRepository;

@Service
public class CarService {
    
    private final CarRepository carRepository;

    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    public List<Car> getAll() {
        return carRepository.findAll();
    }

    public List<Car> getByCount(int count) {
        return carRepository.findAll(PageRequest.of(0, count)).getContent();
    }

    public Car getById(Long id) {
        Car car = carRepository.findById(id)
                            .orElseThrow(() -> new NoSuchElementException("Car with ID " + id + " not found"));
        return car;
    }

    public Car create(CarCreationDTO dto) {
        Car car = Car.builder()
                .image(dto.getImage())
                .description(dto.getDescription())
                .features(dto.getFeatures())
                .make(dto.getMake())
                .model(dto.getModel())
                .year(dto.getYear())
                .mileage(dto.getMileage())
                .fuelType(dto.getFuelType())
                .power(dto.getPower())
                .drivetrain(dto.getDrivetrain())
                .transmission(dto.getTransmission())
                .color(dto.getColor())
                .bodyStyle(dto.getBodyStyle())
                .price(dto.getPrice())
                .location(dto.getLocation())
                .status(dto.getStatus())
                .build();

        return carRepository.save(car);
    }

    public void delete(Long id) {
        Car car = carRepository.findById(id)
                            .orElseThrow(() -> new NoSuchElementException("Car with ID " + id + " not found"));
        
        carRepository.delete(car);
    }
}

