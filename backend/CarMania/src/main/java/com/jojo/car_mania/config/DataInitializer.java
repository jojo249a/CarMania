package com.jojo.car_mania.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.jojo.car_mania.repository.CarRepository;

@Component
public class DataInitializer implements CommandLineRunner {

    private final CarRepository carRepository;

    public DataInitializer(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    @Override
    public void run(String... args) {}
}
