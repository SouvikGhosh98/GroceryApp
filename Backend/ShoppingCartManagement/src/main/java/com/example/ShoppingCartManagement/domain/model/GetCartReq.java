package com.example.ShoppingCartManagement.domain.model;

import lombok.Data;

@Data
public class GetCartReq {
    private int productId;
    private int quantity;
    private String productName;
    private double price;
    private String imageUrl;
}