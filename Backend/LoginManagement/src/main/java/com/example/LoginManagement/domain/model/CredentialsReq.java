package com.example.LoginManagement.domain.model;

import lombok.Data;

@Data
public class CredentialsReq {
    private String email;
    private int otp;
}