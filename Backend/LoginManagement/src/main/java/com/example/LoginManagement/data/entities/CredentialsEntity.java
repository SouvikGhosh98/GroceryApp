package com.example.LoginManagement.data.entities;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "credentials")
public class CredentialsEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "email_id", unique = true, nullable = false)
    private String emailId;
}