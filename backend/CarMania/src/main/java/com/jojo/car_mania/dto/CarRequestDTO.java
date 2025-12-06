    package com.jojo.car_mania.dto;


    import com.jojo.car_mania.entity.enums.BodyStyle;
    import com.jojo.car_mania.entity.enums.Drivetrain;
    import com.jojo.car_mania.entity.enums.FuelType;
    import com.jojo.car_mania.entity.enums.Location;
    import com.jojo.car_mania.entity.enums.Transmission;

    import jakarta.validation.constraints.NotBlank;
    import jakarta.validation.constraints.NotNull;
    import lombok.Getter;
    import lombok.Setter;

    @Getter
    @Setter
    public class CarRequestDTO {
        @NotBlank(message = "Image is required.")
        private String image;

        @NotBlank(message = "Features are required.")
        private String features;

        @NotBlank(message = "Make is required.")
        private String make;

        @NotBlank(message = "Model is required.")
        private String model;

        @NotNull(message = "Year is required")
        private Integer year;

        @NotNull(message = "Mileage is required.")
        private Integer mileage;

        @NotNull(message = "Fuel type is required.")
        private FuelType fuelType;

        @NotNull(message = "Power is required.")
        private Integer power;

        @NotNull(message = "Drivetrain is required.")
        private Drivetrain drivetrain;

        @NotNull(message = "Transmission is required.")
        private Transmission transmission;
        
        @NotBlank(message = "Color is required.")
        private String color;
    
        @NotNull(message = "Body style is required.")
        private BodyStyle bodyStyle;

        @NotNull(message = "Price is required.")
        private Double price;

        @NotNull(message = "Location is required.")
        private Location location;
    }
