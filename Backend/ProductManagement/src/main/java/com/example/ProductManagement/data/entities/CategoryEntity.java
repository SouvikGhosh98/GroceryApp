package com.example.ProductManagement.data.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name="category")
public class CategoryEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name = "category_name", nullable = false, unique = true)
    private String categoryName;
}