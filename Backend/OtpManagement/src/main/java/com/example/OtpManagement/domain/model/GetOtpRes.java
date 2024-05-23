package com.example.OtpManagement.domain.model;

import lombok.Data;
import org.springframework.cglib.core.Local;

import java.time.LocalDateTime;

@Data
public class GetOtpRes {
    private int otp;
    private LocalDateTime time;
}