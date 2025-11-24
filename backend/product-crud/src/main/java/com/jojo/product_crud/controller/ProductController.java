package com.jojo.product_crud.controller;

import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jojo.product_crud.entity.Product;
import com.jojo.product_crud.service.ProductService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.jojo.product_crud.dto.ProductRequestDTO;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public ResponseEntity<?> getProducts() {
        List<Product> products = productService.getAll();
        return ResponseEntity.ok(products);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<?> getProduct(@PathVariable Long id) {
        try {
            Product product = productService.getById(id);
            return ResponseEntity.ok(product);
        } catch (NoSuchElementException e) {
            return ResponseEntity.status(404).body(e.getMessage());
        }
    }

    @PostMapping
    public ResponseEntity<?> createProduct(@Valid @RequestBody ProductRequestDTO dto) {
        Product product = productService.create(dto.getName(), dto.getImage(), dto.getPrice());
        return ResponseEntity.status(201).body(product);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateProduct(@PathVariable Long id, @Valid @RequestBody ProductRequestDTO dto) {
        try { 
            Product product = productService.update(id, dto.getName(), dto.getImage(), dto.getPrice());
            return ResponseEntity.ok(Map.of(
                "Product", product,
                "Message", "Product updated successfully"
            ));
        } catch (NoSuchElementException e) {
            return ResponseEntity.status(404).body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id) {
        try {
            productService.delete(id);
            return ResponseEntity.ok("Product deleted successfully");
        } catch (NoSuchElementException e) {
            return ResponseEntity.status(404).body(e.getMessage());
        }
    }
    
}
