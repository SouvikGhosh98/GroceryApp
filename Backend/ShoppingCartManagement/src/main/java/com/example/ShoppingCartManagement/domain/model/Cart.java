package com.example.ShoppingCartManagement.domain.model;

import lombok.Data;

@Data
public class Cart {

    //private int id;
    //private int userId;
    private int productId;
    private int quantity;
    private ProductServiceResponse productServiceResponse;
}