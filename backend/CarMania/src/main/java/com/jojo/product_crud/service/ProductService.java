package com.jojo.product_crud.service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.stereotype.Service;

import com.jojo.product_crud.entity.Product;
import com.jojo.product_crud.repository.ProductRepository;

@Service
public class ProductService {
    
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAll() {
        return productRepository.findAll();
    }

    public Product getById(Long id) {
        Product product = productRepository.findById(id)
                            .orElseThrow(() -> new NoSuchElementException("Product with ID " + id + " not found"));
        return product;
    }

    public Product create(String name, String image, Double price) {
        Product product = Product.builder()
                            .name(name)
                            .image(image)
                            .price(price)
                            .build();

        return productRepository.save(product);
    }

    public Product update(Long id, String name, String image, Double price) {
        Product product = productRepository.findById(id)
                            .orElseThrow(() -> new NoSuchElementException("Product with ID " + id + " not found"));

        product.setName(name);
        product.setImage(image);
        product.setPrice(price);

        return productRepository.save(product);
    }

    public void delete(Long id) {
        Product product = productRepository.findById(id)
                            .orElseThrow(() -> new NoSuchElementException("Product with ID " + id + " not found"));
        
        productRepository.delete(product);
    }
}

