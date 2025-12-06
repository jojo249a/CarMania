package com.jojo.car_mania.service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.stereotype.Service;

import com.jojo.car_mania.dto.CarRequestDTO;
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

    public Car getById(Long id) {
        Car car = carRepository.findById(id)
                            .orElseThrow(() -> new NoSuchElementException("Car with ID " + id + " not found"));
        return car;
    }

    public Car create(CarRequestDTO dto) {
        Car car = Car.builder()
                .image(dto.getImage())
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
                .build();

        return carRepository.save(car);
    }

    public Car update(Long id, CarRequestDTO dto) {
        Car car = carRepository.findById(id)
                            .orElseThrow(() -> new NoSuchElementException("Car with ID " + id + " not found"));

        car.setColor(dto.getColor());
        car.setImage(dto.getImage());
        car.setPrice(dto.getPrice());
        car.setBodyStyle(dto.getBodyStyle());
        car.setDrivetrain(dto.getDrivetrain());
        car.setFeatures(dto.getFeatures());
        car.setFuelType(dto.getFuelType());
        car.setMake(dto.getMake());
        car.setModel(dto.getModel());
        car.setMileage(dto.getMileage());
        car.setPower(dto.getPower());
        car.setTransmission(dto.getTransmission());
        car.setLocation(dto.getLocation());
            return carRepository.save(car);
        }

    public void delete(Long id) {
        Car car = carRepository.findById(id)
                            .orElseThrow(() -> new NoSuchElementException("Car with ID " + id + " not found"));
        
        carRepository.delete(car);
    }
}

