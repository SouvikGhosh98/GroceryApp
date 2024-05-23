package com.example.LoginManagement.domain.services;

import com.example.LoginManagement.data.dao.CredentialsDao;
import com.example.LoginManagement.data.entities.CredentialsEntity;
import com.example.LoginManagement.domain.model.CredentialsReq;
import com.example.LoginManagement.domain.model.OtpResponse;
import com.example.LoginManagement.exception.NoOtpException;
import com.example.LoginManagement.feignClient.OtpClient;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

@Service
@RequiredArgsConstructor
public class CredentialsService {

    private final CredentialsDao credentialsDao;

    @Autowired
    private OtpClient otpClient;

    public int userLogin(CredentialsReq credentialsReq) {
        OtpResponse otpResponse=new OtpResponse();
        otpResponse=otpClient.getOtp(credentialsReq.getEmail());
        int receivedOtp=credentialsReq.getOtp();

        LocalDateTime sentTime=otpResponse.getTime();
        LocalDateTime currTime=LocalDateTime.now();

        long minutesDifference=ChronoUnit.MINUTES.between(sentTime,currTime);

        if(minutesDifference>15) {
             //throw new NoOtpException("OTP expired");
            return -1;
        }

        if(otpResponse.getOtp()==receivedOtp) {
            CredentialsEntity credEnt=new CredentialsEntity();
            credEnt=credentialsDao.findByEmailId(credentialsReq.getEmail()).orElse(null);

            if(credEnt==null) {
                CredentialsEntity addCredEnt=new CredentialsEntity();
                addCredEnt.setEmailId(credentialsReq.getEmail());
                int id=credentialsDao.save(addCredEnt).getId();
                return id;
            }
            else {
                return credEnt.getId();
            }
        }

         return -1;
    }
}