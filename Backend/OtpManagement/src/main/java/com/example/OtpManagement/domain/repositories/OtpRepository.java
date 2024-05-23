package com.example.OtpManagement.domain.repositories;

import com.example.OtpManagement.domain.model.GetOtpRes;

public interface OtpRepository {

    public void addOtp(int otp,String email);
    public GetOtpRes getOtp(String emailId);
}