package com.example.ShoppingCartManagement.domain.model;

import lombok.Data;

@Data
public class UpdateQuantityReq {
    private int userId;
    private int productId;
    private int newQuantity;
}