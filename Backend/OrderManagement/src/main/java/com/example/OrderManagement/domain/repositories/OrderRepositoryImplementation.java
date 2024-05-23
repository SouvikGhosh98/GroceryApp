package com.example.OrderManagement.domain.repositories;

import com.example.OrderManagement.data.dao.AddressDao;
import com.example.OrderManagement.data.dao.OrderDao;
import com.example.OrderManagement.data.dao.OrderHistoryDao;
import com.example.OrderManagement.data.entities.AddressEntity;
import com.example.OrderManagement.data.entities.OrderEntity;
import com.example.OrderManagement.data.entities.OrderHistoryEntity;
import com.example.OrderManagement.domain.model.*;
import com.example.OrderManagement.exception.GlobalException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
public class OrderRepositoryImplementation implements OrderRepository {
    private final AddressDao addressDao;
    private final OrderDao orderDao;
    private final OrderHistoryDao orderHistoryDao;

    public int placeOrder(PlaceOrderReq placeOrderReq, List<CartReq> cartList) {
        AddressEntity addrEnt = new AddressEntity();
        if(placeOrderReq.getAddressStatus()==-1) {
            AddAddressReq addAddressReq = new AddAddressReq();
            addAddressReq = placeOrderReq.getAddAddressReq();
            addrEnt = addressDao.save(mapDomainToAddressEntity(addAddressReq));
        }
        else {
            addrEnt=addressDao.findById(placeOrderReq.getAddressStatus()).orElse(null);
        }

        OrderEntity orderEnt = new OrderEntity();
        orderEnt=orderDao.save(mapDomainToOrderEntity(placeOrderReq, addrEnt));
        //List<CartItem> cartItems=new ArrayList<>();
        //cartItems=placeOrderReq.getCartItemList();
        for(CartReq item:cartList) {
            orderHistoryDao.save(mapDomainToOrderHistoryEntity(item,orderEnt));
        }

        return 1;
    }

    public List<PlacedOrder> getAllOrders(int id) {
        List<AddressEntity> userAddressList=new ArrayList<>();
        userAddressList=addressDao.findAllByUserId(id).orElseThrow(
                () -> new GlobalException("No Product For User"));

        List<PlacedOrder> orderList=new ArrayList<>();

        for(AddressEntity addrEnt:userAddressList) {
            List<OrderEntity> orderEntityList=new ArrayList<>();
            orderEntityList=orderDao.findAllByAddressIdId(addrEnt.getId()).orElseThrow(
                    () -> new GlobalException("No Order For User"));
            for(OrderEntity orderEntity:orderEntityList) {
                orderList.add(mapToDomainOrderEntity(orderEntity));
            }
        }

         return orderList;
    }

    public OrderDetails getOrderDetails(int id) {
        OrderEntity orderEntity=new OrderEntity();
        OrderDetails orderDetails=new OrderDetails();
        orderEntity=orderDao.findById(id).orElse(null);

        if(orderEntity!=null) {
            orderDetails.setOrderTotal(orderEntity.getOrderTotal());
            List<OrderHistoryEntity> orderHistoryEntityList=new ArrayList<>();
            List<OrderedProduct> orderedProductList=new ArrayList<>();
            orderHistoryEntityList=orderHistoryDao.findAllByOrderIdId(id).orElseThrow(
                    () -> new GlobalException("No Products Found for Order"));

            for(OrderHistoryEntity orderHistoryEntity:orderHistoryEntityList) {
                OrderedProduct orderedProduct=new OrderedProduct();

                orderedProduct.setProductId(orderHistoryEntity.getProductId());
                orderedProduct.setQuantity(orderHistoryEntity.getQuantity());
                orderedProduct.setOrderStatus(orderHistoryEntity.getOrderStatus());

                orderedProductList.add(orderedProduct);
            }

            orderDetails.setOrderedProductList(orderedProductList);

            AddressEntity addressEntity=new AddressEntity();
            addressEntity=addressDao.findById(orderEntity.getAddressId().getId()).orElse(null);

            if(addressEntity!=null) {
                orderDetails.setAddressLine1(addressEntity.getAddressLine1());
                orderDetails.setAddressLine2(addressEntity.getAddressLine2());
                orderDetails.setCity(addressEntity.getCity());
                orderDetails.setLandmark(addressEntity.getLandmark());
                orderDetails.setPinCode(addressEntity.getPinCode());
                orderDetails.setCountry(addressEntity.getCountry());
                orderDetails.setCustomerName(addressEntity.getCustomerName());
                orderDetails.setPhoneNumber(addressEntity.getPhoneNumber());
            }
        }

         return orderDetails;
    }

    public List<Address> getAllAddresses(int id) {
        List<AddressEntity> addressEntityList=new ArrayList<>();
        List<Address> addressList=new ArrayList<>();
        addressEntityList=addressDao.findAllByUserId(id).orElseThrow(
                () -> new GlobalException("No Product For User"));

        for(AddressEntity addressEntity:addressEntityList) {
            addressList.add(mapAddressEntityToDomain(addressEntity));
        }

         return addressList;
    }

    private Address mapAddressEntityToDomain(AddressEntity addressEntity) {
        Address address=new Address();

        address.setId(addressEntity.getId());
        address.setUserId(addressEntity.getUserId());
        address.setAddressLine1(addressEntity.getAddressLine1());
        address.setAddressLine2(addressEntity.getAddressLine2());
        address.setCity(addressEntity.getCity());
        address.setPinCode(addressEntity.getPinCode());
        address.setCountry(addressEntity.getCountry());
        address.setLandmark(addressEntity.getLandmark());
        address.setCustomerName(addressEntity.getCustomerName());
        address.setPhoneNumber(addressEntity.getPhoneNumber());

        return address;
    }

    private PlacedOrder mapToDomainOrderEntity(OrderEntity orderEntity) {
        PlacedOrder placedOrder=new PlacedOrder();

        placedOrder.setOrderDate(orderEntity.getOrderDate());;
        placedOrder.setOrderTotal(orderEntity.getOrderTotal());
        placedOrder.setId(orderEntity.getId());

        return placedOrder;
    }

    private AddressEntity mapDomainToAddressEntity(AddAddressReq addAddressReq) {
        AddressEntity addressEntity = new AddressEntity();

        addressEntity.setAddressLine1(addAddressReq.getAddressLine1());
        addressEntity.setAddressLine2(addAddressReq.getAddressLine2());
        addressEntity.setCity(addAddressReq.getCity());
        addressEntity.setPinCode(addAddressReq.getPinCode());
        addressEntity.setCustomerName(addAddressReq.getCustomerName());
        addressEntity.setLandmark(addAddressReq.getLandmark());
        addressEntity.setUserId(addAddressReq.getUserId());
        addressEntity.setCountry(addAddressReq.getCountry());
        addressEntity.setPhoneNumber(addAddressReq.getPhoneNumber());
        addressEntity.setState(addAddressReq.getState());

        return addressEntity;
    }

    private OrderEntity mapDomainToOrderEntity(PlaceOrderReq placeOrderReq, AddressEntity addrEnt) {
        OrderEntity orderEntity = new OrderEntity();

        orderEntity.setOrderDate(placeOrderReq.getOrderDate());
        orderEntity.setPaymentMethod(placeOrderReq.getPaymentMethod());
        orderEntity.setOrderTotal(placeOrderReq.getOrderTotal());
        orderEntity.setAddressId(addrEnt);

        return orderEntity;
    }

    private OrderHistoryEntity mapDomainToOrderHistoryEntity(CartReq item,OrderEntity orderEnt) {
        OrderHistoryEntity orderHistoryEntity=new OrderHistoryEntity();
        orderHistoryEntity.setProductId(item.getProductId());
        orderHistoryEntity.setQuantity(item.getQuantity());
        orderHistoryEntity.setOrderStatus("ORDERED");
        orderHistoryEntity.setOrderId(orderEnt);

        return orderHistoryEntity;
    }
}