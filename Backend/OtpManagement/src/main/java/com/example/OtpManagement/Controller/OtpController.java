package com.example.OtpManagement.Controller;

import com.example.OtpManagement.domain.model.GetOtpRes;
import com.example.OtpManagement.domain.services.EmailOtpService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/otp-service")
@RequiredArgsConstructor
@CrossOrigin(originPatterns = "*localhost*")
public class OtpController {

    private final EmailOtpService emailOtpService;

    @GetMapping("/otpVerification/{id}")
    public void verifyOtp(@PathVariable("id") String emailId) {
        int otp = (int) (Math.random() * 900000) + 100000;
        emailOtpService.sendEmailOtp("OTP Verification", emailId, otp);
    }

    @GetMapping("/getOtp/{id}")
    public GetOtpRes getOtp(@PathVariable("id") String emailId) {
        GetOtpRes getOtpRes=new GetOtpRes();
        getOtpRes=emailOtpService.getOtp(emailId);

        return getOtpRes;
    }
}