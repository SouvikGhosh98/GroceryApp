package com.example.OrderManagement.domain.model;

import jakarta.persistence.Column;
import lombok.Data;

@Data
public class Address {
    private int id;
    private int userId;
    private String customerName;
    private String addressLine1;
    private String addressLine2;
    private String city;
    private int pinCode;
    private String country;
    private String landmark;
    private String phoneNumber;
}