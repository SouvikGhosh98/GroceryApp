package com.example.OtpManagement.domain.services;

import com.example.OtpManagement.domain.model.GetOtpRes;
import com.example.OtpManagement.domain.repositories.OtpRepository;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class EmailOtpService {

    private final JavaMailSender mailSender;
    private final OtpRepository otpRepo;

    public void sendEmailOtp(String sub,String email,int otp) {

        otpRepo.addOtp(otp, email);
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("projectt575@gmail.com");
        message.setTo(email);
        message.setText("Your otp for consent approval is " + Integer.toString(otp));
        message.setSubject(sub);
        mailSender.send(message);
    }

    public GetOtpRes getOtp(String emailId) {
        GetOtpRes getOtpRes=new GetOtpRes();
        getOtpRes=otpRepo.getOtp(emailId);

        return getOtpRes;
    }
}