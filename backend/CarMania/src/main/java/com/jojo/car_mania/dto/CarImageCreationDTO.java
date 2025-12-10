package com.jojo.car_mania.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CarImageCreationDTO {

    @NotBlank(message = "Image is required.")
    private String image;

    @NotNull(message = "Car is required.")
    private Long carId;
}
