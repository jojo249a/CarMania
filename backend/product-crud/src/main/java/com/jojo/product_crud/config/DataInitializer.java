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
            productRepository.save(new Product(null, "Car1", "/images/911.jpeg", 799.99));
            productRepository.save(new Product(null, "Car2", "/images/astonmartin.jpeg", 34000.99));
            productRepository.save(new Product(null, "Car3", "/images/sti.jpeg", 25999.99));
            productRepository.save(new Product(null, "Car4", "/images/sf90.jpeg", 1009.99));
            productRepository.save(new Product(null, "Car5", "/images/m4.jpeg", 199999.99));
        }
    }
}
