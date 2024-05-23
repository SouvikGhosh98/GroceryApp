package com.example.ProductManagement.data.dao;

import com.example.ProductManagement.data.entities.CategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryDao extends JpaRepository<CategoryEntity, Integer> {
}