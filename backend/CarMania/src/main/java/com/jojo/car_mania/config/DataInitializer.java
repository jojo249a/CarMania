package com.jojo.car_mania.config;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.jojo.car_mania.entity.Car;
import com.jojo.car_mania.entity.CarImage;
import com.jojo.car_mania.entity.Equipment;
import com.jojo.car_mania.repository.CarRepository;
import com.jojo.car_mania.repository.EquipmentRepository;
import com.jojo.car_mania.util.SlugUtil;

@Component
public class DataInitializer implements CommandLineRunner {

    private final CarRepository carRepository;
    private final EquipmentRepository equipmentRepository;

    public DataInitializer(CarRepository carRepository, EquipmentRepository equipmentRepository) {
        this.carRepository = carRepository; 
        this.equipmentRepository = equipmentRepository;
    }

    @Override
    public void run(String... args) {
        carRepository.deleteAll();

        List<CarImage> carImages = new ArrayList<>();

        Car car = Car.builder()
                .description("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis, nisi ac bibendum venenatis, nibh nisl auctor justo, eget facilisis lectus leo in nunc. Sed consequat dolor a purus ultrices, non scelerisque arcu dapibus. Nam rhoncus a nulla id congue. Etiam pellentesque sit amet dolor ac commodo. Aenean interdum felis libero, vitae dapibus lectus efficitur eget. Donec ut venenatis mi. Morbi a tellus elementum, mollis purus ut, tristique lacus.")
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
        
        for (int j = 0; j < 12; j++) {

            CarImage img = CarImage.builder()
                            .image("/images/911_1.jpeg")
                            .car(car)
                            .build();

            carImages.add(img);
        }

        car.setCarImages(carImages);

        Car car2 = Car.builder()
                .description("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit tortor sed sollicitudin pellentesque. Vivamus metus odio, fringilla pharetra facilisis sit amet, aliquet ac augue. Sed id justo sodales, rutrum arcu ac, facilisis odio. Donec et lobortis sapien. Nullam viverra turpis nunc, eget ullamcorper eros scelerisque nec. Ut turpis ante, dictum quis convallis at, facilisis in dolor. Phasellus tristique eleifend dolor a rutrum. Suspendisse porta congue nulla sit amet facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque nibh urna, mollis quis placerat ac, interdum et augue. Vivamus sit amet magna id tellus fermentum ullamcorper non elementum metus.")
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

        
        List<CarImage> car2Images = new ArrayList<>();

        CarImage img2 = CarImage.builder()
                            .image("/images/812superfast_1.jpeg")
                            .car(car2)
                            .build();

        CarImage img3 = CarImage.builder()
                            .image("/images/812superfast_2.jpeg")
                            .car(car2)
                            .build();


        CarImage img4 = CarImage.builder()
                            .image("/images/812superfast_3.jpeg")
                            .car(car2)
                            .build();

        car2Images.add(img2);
        car2Images.add(img3);
        car2Images.add(img4);

        car2.setCarImages(car2Images);

        Car car3 = Car.builder()
                .description("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit tortor sed sollicitudin pellentesque. Vivamus metus odio, fringilla pharetra facilisis sit amet, aliquet ac augue. Sed id justo sodales, rutrum arcu ac, facilisis odio. Donec et lobortis sapien. Nullam viverra turpis nunc, eget ullamcorper eros scelerisque nec. Ut turpis ante, dictum quis convallis at, facilisis in dolor. Phasellus tristique eleifend dolor a rutrum. Suspendisse porta congue nulla sit amet facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque nibh urna, mollis quis placerat ac, interdum et augue. Vivamus sit amet magna id tellus fermentum ullamcorper non elementum metus.")
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

        List<CarImage> car3Images = new ArrayList<>();

        CarImage img5 = CarImage.builder()
                            .image("/images/m4.jpeg")
                            .car(car3)
                            .build();
        
        car3Images.add(img5);

        car3.setCarImages(car3Images);

        car.setSlug(SlugUtil.slugify(car.getModel()));
        car2.setSlug(SlugUtil.slugify(car2.getModel()));
        car3.setSlug(SlugUtil.slugify(car3.getModel()));

        // 1️⃣ Save cars first
        carRepository.saveAll(Arrays.asList(car, car2, car3));

        // 2️⃣ Create equipment WITHOUT setting cars
        Equipment bluetooth = Equipment.builder().name("Bluetooth").build();
        Equipment appleCarPlay = Equipment.builder().name("Apple CarPlay").build();
        Equipment usb = Equipment.builder().name("USB").build();

        // 3️⃣ Assign equipment to cars and cars to equipment
        List<Car> allCars = Arrays.asList(car, car2, car3);
        List<Equipment> allEquipment = Arrays.asList(bluetooth, appleCarPlay, usb);

        for (Car c : allCars) {
            c.setEquipment(new ArrayList<>(allEquipment));
        }

        for (Equipment e : allEquipment) {
            e.setCars(new ArrayList<>(allCars));
        }

        // 4️⃣ Save equipment (if cascade is not set)
        equipmentRepository.saveAll(allEquipment);

        // 5️⃣ Optionally save cars again if not using cascade
        carRepository.saveAll(allCars);
    }
}
