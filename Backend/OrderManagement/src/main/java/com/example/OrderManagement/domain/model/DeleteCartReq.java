package com.example.OrderManagement.domain.model;

import lombok.Data;

@Data
public class DeleteCartReq {
    private int userId;
    private int productId;
    private int newQuantity;
}