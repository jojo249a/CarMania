package com.jojo.car_mania.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jojo.car_mania.entity.Car;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {   
}
