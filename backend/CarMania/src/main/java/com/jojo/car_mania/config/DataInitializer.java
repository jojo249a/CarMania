package com.jojo.car_mania.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.jojo.car_mania.entity.Car;
import com.jojo.car_mania.repository.CarRepository;

@Component
public class DataInitializer implements CommandLineRunner {

    private final CarRepository carRepository;

    public DataInitializer(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    @Override
    public void run(String... args) {
        carRepository.deleteAll();
        if (carRepository.count() == 0) {
            for (int i = 0; i <= 1; i++ ) { 
                carRepository.save(new Car(null, "Porsche 911 GT2 RS", "/images/911.jpeg", 799.99));
                carRepository.save(new Car(null, "Subaru Impreza WRX STi", "/images/sti.jpeg", 25999.99));
                carRepository.save(new Car(null, "BMW M4 Competition", "/images/m4.jpeg", 199999.99));
            }
        }
    }
}
