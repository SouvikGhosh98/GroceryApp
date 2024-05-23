package com.example.OrderManagement.data.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "address")
public class AddressEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "user_id")
    private int userId;

    @Column(name = "customer_name")
    private String customerName;

    @Column(name = "address_line1")
    private String addressLine1;

    @Column(name = "address_line2")
    private String addressLine2;

    @Column(name = "city")
    private String city;

    @Column(name = "pin_code")
    private int pinCode;

    @Column(name = "country")
    private String country;

    @Column(name = "landmark")
    private String landmark;

    @Column(name = "phone_no", nullable = false)
    private String phoneNumber;

    @Column(name = "state", nullable = false)
    private String state;
}