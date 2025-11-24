package com.jojo.product_crud.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductRequestDTO {
    @NotBlank(message = "Name is required")
    private String name;
    
    @NotBlank(message = "Image is required")
    private String image;

    @Positive(message = "Price must be positive")
    private Double price;

}
