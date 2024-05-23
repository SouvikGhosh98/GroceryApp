package com.example.OrderManagement.domain.model;

import lombok.Data;

@Data
public class OrderedProduct {
    private int productId;
    private int quantity;
    private String orderStatus;
    private String productName;
    private double price;
    private String imageUrl;
}