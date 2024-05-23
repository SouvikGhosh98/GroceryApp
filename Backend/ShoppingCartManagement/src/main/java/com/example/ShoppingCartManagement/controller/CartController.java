package com.example.ShoppingCartManagement.controller;

import java.util.ArrayList;
import java.util.List;

import com.example.ShoppingCartManagement.domain.model.GetCartReq;
import com.example.ShoppingCartManagement.domain.model.UpdateQuantityReq;
import com.example.ShoppingCartManagement.domain.services.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import com.example.ShoppingCartManagement.domain.model.Cart;

@RestController
@RequiredArgsConstructor
@RequestMapping("/cart-service")
@CrossOrigin(originPatterns = "*localhost*")
public class CartController {

    private final CartService cartService;

    @GetMapping("/getCart/{id}")
    public List<GetCartReq> getCart(@PathVariable("id") int id) {
        List<GetCartReq> cartList=new ArrayList<>();
        cartList=cartService.getCart(id);

        return cartList;
    }

    @PostMapping("/updateCart")
    public int updateQuantity(@RequestBody UpdateQuantityReq updateQuantityReq) {
        int res=cartService.updateQuantity(updateQuantityReq);

        return res;
    }
}