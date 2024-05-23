package com.example.ShoppingCartManagement.domain.services;

import com.example.ShoppingCartManagement.domain.model.Cart;
import com.example.ShoppingCartManagement.domain.model.GetCartReq;
import com.example.ShoppingCartManagement.domain.model.UpdateQuantityReq;
import com.example.ShoppingCartManagement.domain.repositories.CartRepository;
import com.example.ShoppingCartManagement.feignClient.ProductClient;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CartService {

    private static final Logger logger = LoggerFactory.getLogger(CartService.class);

    private final CartRepository cartRepository;

    @Autowired
    private ProductClient productClient;

    public List<GetCartReq> getCart(int id) {

        List<Cart> cartList=new ArrayList<>();
        List<GetCartReq> updatedCartList=new ArrayList<>();
        cartList=cartRepository.getCartOfUser(id);

        for(Cart cart:cartList) {
            //logger.info(Integer.toString(cart.getProductId()));
            cart.setProductServiceResponse(productClient.getProduct(cart.getProductId()));
        }

        for(Cart cart:cartList) {
            GetCartReq getCartReq=new GetCartReq();

            getCartReq.setQuantity(cart.getQuantity());
            getCartReq.setProductId(cart.getProductId());
            getCartReq.setProductName(cart.getProductServiceResponse().getProductName());
            getCartReq.setPrice(cart.getProductServiceResponse().getPrice());
            getCartReq.setImageUrl(cart.getProductServiceResponse().getImageUrl());

            updatedCartList.add(getCartReq);
        }

         return updatedCartList;
    }

    public int updateQuantity(UpdateQuantityReq updateQuantityReq) {
        int res=cartRepository.updateQuantity(updateQuantityReq);
        return res;
    }
}