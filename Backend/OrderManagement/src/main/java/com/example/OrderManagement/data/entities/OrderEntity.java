package com.example.OrderManagement.data.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "placed_order")
public class OrderEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "order_date")
    private LocalDate orderDate;

    @Column(name = "payment_method")
    private String paymentMethod;

    @Column(name = "order_total")
    private double orderTotal;

    @ManyToOne
    @JoinColumn(name = "address_id", nullable = false)
    private AddressEntity addressId;
}