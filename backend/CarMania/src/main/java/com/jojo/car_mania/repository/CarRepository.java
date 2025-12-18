package com.jojo.car_mania.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.jojo.car_mania.entity.Car;


@Repository
public interface CarRepository extends JpaRepository<Car, Long>, JpaSpecificationExecutor<Car> {   
    Long countByStatus(String status);
    
    List<Car> findByStatus(String status);

    @Query("SELECT DISTINCT c.make FROM Car c WHERE c.status = :status")
    List<String> findMakesByStatus(@Param("status") String status);

    Optional<Car> findBySlug(String slug);
}
