    package com.jojo.car_mania.dto;

    import jakarta.validation.constraints.NotBlank;
    import jakarta.validation.constraints.NotNull;
    import lombok.Getter;
    import lombok.Setter;

    @Getter
    @Setter
    public class CarCreationDTO {
        @NotBlank(message = "Image is required.")
        private String image;

        private String description;

        private String features;

        @NotBlank(message = "Make is required.")
        private String make;

        @NotBlank(message = "Model is required.")
        private String model;

        @NotNull(message = "Year is required")
        private Integer year;

        @NotNull(message = "Mileage is required.")
        private Integer mileage;

        @NotBlank(message = "Fuel type is required.")
        private String fuelType;

        @NotNull(message = "Power is required.")
        private Integer power;

        @NotBlank(message = "Drivetrain is required.")
        private String drivetrain;

        @NotBlank(message = "Transmission is required.")
        private String transmission;
        
        @NotBlank(message = "Color is required.")
        private String color;
    
        @NotBlank(message = "Body style is required.")
        private String bodyStyle;

        @NotNull(message = "Price is required.")
        private Integer price;

        @NotBlank(message = "Location is required.")
        private String location;

        private Double engineSize;

        @NotBlank(message = "Status is required.")
        private String status;
    }
