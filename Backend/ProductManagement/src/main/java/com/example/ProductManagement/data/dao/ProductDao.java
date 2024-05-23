package com.example.ProductManagement.data.dao;

import com.example.ProductManagement.data.entities.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProductDao extends JpaRepository<ProductEntity, Integer> {
    Optional<ProductEntity> findById(int id);
    Optional<List<ProductEntity>> findAllByCategoryIdId(int id);
}