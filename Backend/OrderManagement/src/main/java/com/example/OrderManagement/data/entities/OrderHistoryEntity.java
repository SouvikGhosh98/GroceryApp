package com.example.OrderManagement.data.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name="order_history")
public class OrderHistoryEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "product_id")
    private int productId;

    @Column(name = "quantity")
    private int quantity;

    @Column(name = "order_status")
    private String orderStatus;

    @ManyToOne
    @JoinColumn(name = "order_id", nullable = false)
    private OrderEntity orderId;
}