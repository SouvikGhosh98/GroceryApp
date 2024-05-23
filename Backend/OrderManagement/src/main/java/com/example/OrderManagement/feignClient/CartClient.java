package com.example.OrderManagement.feignClient;

import com.example.OrderManagement.domain.model.CartReq;
import com.example.OrderManagement.domain.model.DeleteCartReq;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@FeignClient(name = "cartservice", url = "${cartservice.url}")
public interface CartClient {

    @GetMapping("/getCart/{id}")
    public List<CartReq> getCart(@PathVariable("id") int id);

    @PostMapping("/updateCart")
    public int deleteCartItems(@RequestBody DeleteCartReq deleteCartReq);
}