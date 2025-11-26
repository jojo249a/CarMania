package com.jojo.product_crud.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.jojo.product_crud.entity.Product;
import com.jojo.product_crud.repository.ProductRepository;

@Component
public class DataInitializer implements CommandLineRunner {

    private final ProductRepository productRepository;

    public DataInitializer(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public void run(String... args) {
        productRepository.deleteAll();
        if (productRepository.count() == 0) {
            for (int i = 0; i <= 1; i++ ) { 
                productRepository.save(new Product(null, "Porsche 911 GT2 RS", "/images/911.jpeg", 799.99));
                productRepository.save(new Product(null, "Subaru Impreza WRX STi", "/images/sti.jpeg", 25999.99));
                productRepository.save(new Product(null, "BMW M4 Competition", "/images/m4.jpeg", 199999.99));
            }
        }
    }
}
