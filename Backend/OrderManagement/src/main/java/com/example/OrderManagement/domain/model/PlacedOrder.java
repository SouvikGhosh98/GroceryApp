package com.example.OrderManagement.domain.model;

import lombok.Data;

import java.time.LocalDate;

@Data
public class PlacedOrder {
    private int id;
    private LocalDate orderDate;
    private double orderTotal;
}