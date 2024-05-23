package com.example.LoginManagement.domain.model;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class OtpResponse {
    private int otp;
    private LocalDateTime time;
}