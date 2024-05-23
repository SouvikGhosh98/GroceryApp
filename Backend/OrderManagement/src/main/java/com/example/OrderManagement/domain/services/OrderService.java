package com.example.OrderManagement.domain.services;

import com.example.OrderManagement.domain.model.*;
import com.example.OrderManagement.domain.repositories.OrderRepository;
import com.example.OrderManagement.feignClient.CartClient;
import com.example.OrderManagement.feignClient.ProductClient;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;

    @Autowired
    private CartClient cartClient;

    @Autowired
    private ProductClient productClient;

    public int placeOrder(PlaceOrderReq placeOrderReq) {

        List<CartReq> cartList=new ArrayList<>();
        DeleteCartReq deleteCartReq=new DeleteCartReq();
        cartList=cartClient.getCart(placeOrderReq.getAddAddressReq().getUserId());
        orderRepository.placeOrder(placeOrderReq,cartList);
        deleteCartReq.setProductId(-1);
        deleteCartReq.setUserId(placeOrderReq.getAddAddressReq().getUserId());
        deleteCartReq.setNewQuantity(-1);
        cartClient.deleteCartItems(deleteCartReq);

        return 1;
    }

    public List<PlacedOrder> getAllOrders(int id) {
        List<PlacedOrder> orderList=new ArrayList<>();
        orderList=orderRepository.getAllOrders(id);

        return orderList;
    }

    public OrderDetails getOrderDetails(int id) {
        OrderDetails orderDetails=new OrderDetails();
        List<OrderedProduct> orderedProductList=new ArrayList<>();
        orderDetails=orderRepository.getOrderDetails(id);

        orderedProductList=orderDetails.getOrderedProductList();

        for(OrderedProduct orderedProduct:orderedProductList) {
            ProductServiceResponse productServiceResponse=new ProductServiceResponse();
            productServiceResponse=productClient.getProduct(orderedProduct.getProductId());
            orderedProduct.setProductName(productServiceResponse.getProductName());
            orderedProduct.setPrice(orderedProduct.getQuantity()* productServiceResponse.getPrice());
            orderedProduct.setImageUrl(productServiceResponse.getImageUrl());
        }

         return orderDetails;
    }

    public List<Address> getAllAddresses(int id) {
        List<Address> addressList=new ArrayList<>();
        addressList=orderRepository.getAllAddresses(id);

        return addressList;
    }
}