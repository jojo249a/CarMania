package com.jojo.car_mania.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.jojo.car_mania.dto.CarImageCreationDTO;
import com.jojo.car_mania.entity.Car;
import com.jojo.car_mania.entity.CarImage;
import com.jojo.car_mania.repository.CarImageRepository;

@Service
public class CarImageService {
    
    private final CarImageRepository carImageRepository;
    private final CarService carService;

    public CarImageService(CarImageRepository carImageRepository, CarService carService) {
        this.carImageRepository = carImageRepository;
        this.carService = carService;
    }

    public CarImage create(CarImageCreationDTO dto) {
        Car car = carService.getById(dto.getCarId());

        CarImage image = CarImage.builder()
                        .image(dto.getImage())
                        .car(car)
                        .build();

        return carImageRepository.save(image);
    }

    public List<CarImage> getByCarId(Long carId) {
        List<CarImage> images = carImageRepository.findByCarId(carId);

        return images;
    }
}
