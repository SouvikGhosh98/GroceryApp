package com.example.OtpManagement.data.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name="otp")
public class OtpEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "otp")
    private int otp;

    @Column(name = "email")
    private String email;

    @Column(name="time")
    private LocalDateTime time;
}