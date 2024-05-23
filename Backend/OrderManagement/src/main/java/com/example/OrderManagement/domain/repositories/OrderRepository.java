package com.example.OrderManagement.domain.repositories;

import com.example.OrderManagement.domain.model.*;

import java.util.List;

public interface OrderRepository {
    public int placeOrder(PlaceOrderReq placeOrderReq, List<CartReq> cartList);

    public List<PlacedOrder> getAllOrders(int id);

    public OrderDetails getOrderDetails(int id);

    public List<Address> getAllAddresses(int id);
}