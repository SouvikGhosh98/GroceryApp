package com.example.ProductManagement.domain.model;

import com.example.ProductManagement.data.entities.CategoryEntity;
import lombok.Data;

@Data
public class Product {

    private int id;
    //private CategoryEntity categoryId;
    private String productName;
    private String description;
    private double price;
    private String imageUrl;
    private int isAvailable;
}