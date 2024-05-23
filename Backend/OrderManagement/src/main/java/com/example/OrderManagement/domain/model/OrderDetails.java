package com.example.OrderManagement.domain.model;

import lombok.Data;

import java.util.List;

@Data
public class OrderDetails {
    List<OrderedProduct> orderedProductList;
    private String customerName;
    private String addressLine1;
    private String addressLine2;
    private String city;
    private int pinCode;
    private String country;
    private String landmark;
    private String phoneNumber;
    private double orderTotal;
}