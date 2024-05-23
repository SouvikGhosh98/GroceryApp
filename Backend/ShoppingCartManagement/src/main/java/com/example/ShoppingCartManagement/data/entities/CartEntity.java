package com.example.ShoppingCartManagement.data.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "cart")
public class CartEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "user_id")
    private int userId;

    @Column(name = "product_id")
    private int productId;

    @Column(name = "quantity")
    private int quantity;
}