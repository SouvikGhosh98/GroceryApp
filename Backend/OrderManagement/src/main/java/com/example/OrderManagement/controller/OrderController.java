package com.example.OrderManagement.controller;

import com.example.OrderManagement.domain.model.*;
import com.example.OrderManagement.domain.services.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/order-service")
@RequiredArgsConstructor
@CrossOrigin(originPatterns = "*localhost*")

public class OrderController {

    private final OrderService orderService;

    @PostMapping("/placeOrder")
    public int placeOrder(@RequestBody PlaceOrderReq placeOrderReq) {
        orderService.placeOrder(placeOrderReq);
        return 1;
    }

    @GetMapping("/getAllOrders/{id}")
    public List<PlacedOrder> getAllOrders(@PathVariable("id") int id) {
        List<PlacedOrder> orderList=new ArrayList<>();
        orderList=orderService.getAllOrders(id);

        return orderList;
    }

    @GetMapping("/getOrderDetails/{id}")
    public OrderDetails getOrderDetails(@PathVariable("id") int id) {
        OrderDetails orderDetails=new OrderDetails();
        orderDetails=orderService.getOrderDetails(id);

        return orderDetails;
    }

    @GetMapping("/getAllAddresses/{id}")
    public List<Address> getAllAddresses(@PathVariable("id") int id) {
        List<Address> addressList=new ArrayList<>();
        addressList=orderService.getAllAddresses(id);

        return addressList;
    }
}