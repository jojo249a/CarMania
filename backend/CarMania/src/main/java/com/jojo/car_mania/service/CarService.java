package com.jojo.car_mania.service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.stereotype.Service;

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

    public Car create(String name, String image, Double price) {
        Car car = Car.builder()
                            .name(name)
                            .image(image)
                            .price(price)
                            .build();

        return carRepository.save(car);
    }

    public Car update(Long id, String name, String image, Double price) {
        Car car = carRepository.findById(id)
                            .orElseThrow(() -> new NoSuchElementException("Car with ID " + id + " not found"));

        car.setName(name);
        car.setImage(image);
        car.setPrice(price);

        return carRepository.save(car);
    }

    public void delete(Long id) {
        Car car = carRepository.findById(id)
                            .orElseThrow(() -> new NoSuchElementException("Car with ID " + id + " not found"));
        
        carRepository.delete(car);
    }
}

