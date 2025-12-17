package com.jojo.car_mania.specs;

import org.springframework.data.jpa.domain.Specification;

import com.jojo.car_mania.entity.Car;

public class CarSpecification {
    
    public static Specification<Car> hasStatus(String status) {
        return (root, query, cb) ->
                status == null ? null : cb.equal(root.get("status"), status);
    }

    public static Specification<Car> hasMake(String make) {
        return (root, query, cb) ->
                make == null ? null : cb.equal(root.get("make"), make);
    }
}
