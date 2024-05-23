package com.example.ShoppingCartManagement.domain.repositories;

import java.util.List;
import com.example.ShoppingCartManagement.domain.model.Cart;
import com.example.ShoppingCartManagement.domain.model.UpdateQuantityReq;

public interface CartRepository {

    public List<Cart> getCartOfUser(int id);
    public int updateQuantity(UpdateQuantityReq updateQuantityReq);
}