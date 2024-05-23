package com.example.OrderManagement.domain.model;

import lombok.Data;

@Data
public class ProductServiceResponse {
    private int id;
    private String productName;
    private String description;
    private double price;
    private String imageUrl;
    private int isAvailable;
}