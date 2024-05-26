package com.example.OrderManagement.domain.services;

import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class EmailService {

    private final JavaMailSender mailSender;
    public void sendEmail(String sub, String emailId) {

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("projectt575@gmail.com");
        message.setTo(emailId);
        message.setText("Your order has been placed successfully.");
        message.setSubject(sub);
        mailSender.send(message);
    }
}