package com.example.OrderManagement.domain.model;

import lombok.Data;

@Data
public class CartReq {
    private int productId;
    private int quantity;
    private String productName;
    private double price;
    private String imageUrl;
}