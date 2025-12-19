package com.jojo.car_mania.config;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.jojo.car_mania.entity.Car;
import com.jojo.car_mania.entity.CarImage;
import com.jojo.car_mania.repository.CarRepository;
import com.jojo.car_mania.util.SlugUtil;

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
                    .description("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis, nisi ac bibendum venenatis, nibh nisl auctor justo, eget facilisis lectus leo in nunc. Sed consequat dolor a purus ultrices, non scelerisque arcu dapibus. Nam rhoncus a nulla id congue. Etiam pellentesque sit amet dolor ac commodo. Aenean interdum felis libero, vitae dapibus lectus efficitur eget. Donec ut venenatis mi. Morbi a tellus elementum, mollis purus ut, tristique lacus.")
                    .equipment("")
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

            car.setSlug(SlugUtil.slugify(car.getModel()));
            
            for (int j = 0; j < 12; j++) {

                CarImage img = CarImage.builder()
                                .image("/images/911_1.jpeg")
                                .car(car)
                                .build();

                carImages.add(img);

            }

            car.setCarImage(carImages);

            carRepository.save(car);
        }

        Car car2 = Car.builder()
                .image("/images/812superfast_1.jpeg")
                .description("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit tortor sed sollicitudin pellentesque. Vivamus metus odio, fringilla pharetra facilisis sit amet, aliquet ac augue. Sed id justo sodales, rutrum arcu ac, facilisis odio. Donec et lobortis sapien. Nullam viverra turpis nunc, eget ullamcorper eros scelerisque nec. Ut turpis ante, dictum quis convallis at, facilisis in dolor. Phasellus tristique eleifend dolor a rutrum. Suspendisse porta congue nulla sit amet facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque nibh urna, mollis quis placerat ac, interdum et augue. Vivamus sit amet magna id tellus fermentum ullamcorper non elementum metus.")
                .equipment(null)
                .make("Ferrari")
                .model("812 Superfast")
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

        car2.setSlug(SlugUtil.slugify(car2.getModel()));
        
        List<CarImage> car2Images = new ArrayList<>();

        CarImage img4 = CarImage.builder()
                            .image("/images/812superfast_2.jpeg")
                            .car(car2)
                            .build();


        CarImage img5 = CarImage.builder()
                            .image("/images/812superfast_3.jpeg")
                            .car(car2)
                            .build();

        car2Images.add(img4);
        car2Images.add(img5);

        car2.setCarImage(car2Images);

        carRepository.save(car2);

        Car car3 = Car.builder()
                .image("/images/m4.jpeg")
                .description("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit tortor sed sollicitudin pellentesque. Vivamus metus odio, fringilla pharetra facilisis sit amet, aliquet ac augue. Sed id justo sodales, rutrum arcu ac, facilisis odio. Donec et lobortis sapien. Nullam viverra turpis nunc, eget ullamcorper eros scelerisque nec. Ut turpis ante, dictum quis convallis at, facilisis in dolor. Phasellus tristique eleifend dolor a rutrum. Suspendisse porta congue nulla sit amet facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque nibh urna, mollis quis placerat ac, interdum et augue. Vivamus sit amet magna id tellus fermentum ullamcorper non elementum metus.")
                .equipment(null)
                .make("BMW")
                .model("M4 Competition")
                .year(2017)
                .mileage(1900)
                .fuelType("Petrol")
                .power(455)
                .drivetrain("RWD")     
                .transmission("Manual")
                .color("San Marino Blue Metallic")
                .bodyStyle("Coupe")
                .price(225000)
                .location("Bratislava")
                .status("New")
                .build();

        car3.setSlug(SlugUtil.slugify(car3.getModel()));

        carRepository.save(car3);
    }
}
