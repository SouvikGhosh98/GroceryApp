package com.example.OrderManagement.feignClient;

import com.example.OrderManagement.domain.model.ProductServiceResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "productservice", url = "${productservice.url}")
public interface ProductClient {

    @GetMapping("/getProduct/{id}")
    public ProductServiceResponse getProduct(@PathVariable("id") int id);
}