package com.example.OrderManagement.domain.model;

import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class PlaceOrderReq {
    private int addressStatus;
    private AddAddressReq addAddressReq;
    private String paymentMethod;
    private double orderTotal;
    private LocalDate orderDate;
}