package com.jojo.car_mania.config;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.jojo.car_mania.entity.Car;
import com.jojo.car_mania.entity.CarImage;
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
        for (int i = 0; i < 6; i++) {
            List<CarImage> carImages = new ArrayList<>();

            Car car = Car.builder()
                    .image("/images/911_1.jpeg")
                    .description(null)
                    .features(null)
                    .make("Porsche")
                    .model("911 GT2 RS")
                    .year(2018)
                    .mileage(3180)
                    .fuelType("Petrol")
                    .power(515)
                    .drivetrain("RWD")     
                    .transmission("Automatic")
                    .color("GT Silver Metallic")
                    .bodyStyle("Coupe")
                    .price(225000)
                    .location("Ostrava")
                    .status("New")
                    .build();

            CarImage img1 = CarImage.builder()
                            .image("911_2.jpeg")
                            .car(car)
                            .build();


            CarImage img2 = CarImage.builder()
                            .image("911_3.jpeg")
                            .car(car)
                            .build();


            CarImage img3 = CarImage.builder()
                            .image("911_4.jpeg")
                            .car(car)
                            .build();

            carImages.add(img1);
            carImages.add(img2);
            carImages.add(img3);

            car.setCarImage(carImages);

            carRepository.save(car);
        }
    }
}
