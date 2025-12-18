package com.jojo.car_mania.service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.jojo.car_mania.dto.CarCreationDTO;
import com.jojo.car_mania.entity.Car;
import com.jojo.car_mania.repository.CarRepository;
import com.jojo.car_mania.specs.CarSpecification;
import com.jojo.car_mania.util.SlugUtil;

@Service
public class CarService {
    
    private final CarRepository carRepository;

    public CarService (CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    public List<Car> getFiltered(String status, String make, Integer count) {
        
        Specification<Car> spec = Specification
            .where(CarSpecification.hasStatus(status))
            .and(CarSpecification.hasMake(make));

        if (count == null) {
            return carRepository.findAll(spec);
        }

        return carRepository.findAll(spec, PageRequest.of(0, count)).getContent();
    }

    public Car getById(Long id) {
        Car car = carRepository.findById(id)
                        .orElseThrow(() -> new NoSuchElementException("Car with ID " + id + " not found."));
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

        String slug = SlugUtil.slugify(car.getModel());

        car.setSlug(slug);

        return carRepository.save(car);
    }

    public void delete(Long id) {
        Car car = carRepository.findById(id)
                        .orElseThrow(() -> new NoSuchElementException("Car with ID " + id + " not found."));
        
        carRepository.delete(car);
    }

    public Long getCountByStatus(String status) {
        return carRepository.countByStatus(status);
    }

    public List<String> getMakesByStatus(String status) {
        return carRepository.findMakesByStatus(status);
    }

    public Car getBySlug(String slug) {
        Car car = carRepository.findBySlug(slug)
                        .orElseThrow(() -> new NoSuchElementException("Car not found."));
     
        return car;
    }
}

