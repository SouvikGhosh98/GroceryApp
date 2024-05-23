package com.example.ProductManagement.data.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name="product")
public class ProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @ManyToOne
    @JoinColumn(name="category_id", nullable = false)
    private CategoryEntity categoryId;

    @Column(name = "product_name", nullable = false, unique = true)
    private String productName;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "price", nullable = false)
    private double price;

    @Column(name = "image_url", nullable = false)
    private String imageUrl;

    @Column(name = "is_available", nullable = false)
    private int isAvailable;
}