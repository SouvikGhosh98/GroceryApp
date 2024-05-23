package com.example.LoginManagement.feignClient;

import com.example.LoginManagement.domain.model.OtpResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "otpservice", url = "${otpservice.url}")
public interface OtpClient {

    @GetMapping("/getOtp/{id}")
    public OtpResponse getOtp(@PathVariable("id") String id);
}