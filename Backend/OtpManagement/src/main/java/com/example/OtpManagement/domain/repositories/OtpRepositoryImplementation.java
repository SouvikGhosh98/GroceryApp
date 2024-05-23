package com.example.OtpManagement.domain.repositories;

import com.example.OtpManagement.data.dao.OtpDao;
import com.example.OtpManagement.data.entities.OtpEntity;
import com.example.OtpManagement.domain.model.GetOtpRes;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@RequiredArgsConstructor
public class OtpRepositoryImplementation implements OtpRepository{

    private final OtpDao otpDao;
    public void addOtp(int otp,String email) {

        OtpEntity otpEnt=otpDao.findByEmail(email).orElse(null);
        LocalDateTime time = LocalDateTime.now();

        if(otpEnt == null) {
           OtpEntity newOtpEntity = new OtpEntity();
           newOtpEntity.setEmail(email);
           newOtpEntity.setOtp(otp);
           newOtpEntity.setTime(time);

           otpDao.save(newOtpEntity);
        }
        else {
            otpEnt.setOtp(otp);
            otpEnt.setTime(time);

            otpDao.save(otpEnt);
        }
    }

    public GetOtpRes getOtp(String email) {
        OtpEntity otpEnt=new OtpEntity();
        GetOtpRes getOtpRes=new GetOtpRes();
        otpEnt=otpDao.findByEmail(email).orElse(null);

        if(otpEnt!=null) {
            getOtpRes.setOtp(otpEnt.getOtp());
            getOtpRes.setTime(otpEnt.getTime());
        }

         return getOtpRes;
    }
}