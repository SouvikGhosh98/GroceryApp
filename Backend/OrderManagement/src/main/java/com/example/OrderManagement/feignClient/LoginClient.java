package com.example.OrderManagement.feignClient;

import com.example.OrderManagement.domain.model.ProductServiceResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "loginservice", url = "${loginservice.url}")
public interface LoginClient {

    @GetMapping("/getEmailId/{id}")
    public String getEmailId(@PathVariable("id") int id);
}