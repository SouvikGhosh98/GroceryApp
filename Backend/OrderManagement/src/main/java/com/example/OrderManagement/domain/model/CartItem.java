package com.example.OrderManagement.domain.model;

import lombok.Data;

@Data
public class CartItem {
    int productId;
    int quantity;
    String orderStatus;
}