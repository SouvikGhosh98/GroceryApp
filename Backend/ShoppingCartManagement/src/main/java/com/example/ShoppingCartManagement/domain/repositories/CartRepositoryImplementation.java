package com.example.ShoppingCartManagement.domain.repositories;

import com.example.ShoppingCartManagement.data.dao.CartDao;
import com.example.ShoppingCartManagement.domain.model.Cart;
import com.example.ShoppingCartManagement.data.entities.CartEntity;
import com.example.ShoppingCartManagement.domain.model.UpdateQuantityReq;
import com.example.ShoppingCartManagement.exception.GlobalException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
public class CartRepositoryImplementation implements CartRepository{

    private final CartDao cartDao;
    public List<Cart> getCartOfUser(int id) {

        List<CartEntity> cartEntityList = new ArrayList<>();
        cartEntityList = cartDao.findAllByUserId(id).orElseThrow(
                () -> new GlobalException("No Product For User"));

        return mapAllToDomainCartEntity(cartEntityList);
    }

    @Transactional
    public int updateQuantity(UpdateQuantityReq updateQuantityReq) {
        CartEntity cartEntity=new CartEntity();

        if(updateQuantityReq.getNewQuantity()==-1&&updateQuantityReq.getProductId()==-1) {
            cartDao.deleteAllByUserId(updateQuantityReq.getUserId());
            return 0;
        }
        cartEntity=cartDao.findByUserIdAndProductId(updateQuantityReq.getUserId(),updateQuantityReq.getProductId()).orElse(null);

        if(updateQuantityReq.getNewQuantity()!=0) {

            if(cartEntity==null) {
                CartEntity addCartEntity=new CartEntity();
                addCartEntity.setProductId(updateQuantityReq.getProductId());
                addCartEntity.setUserId(updateQuantityReq.getUserId());
                addCartEntity.setQuantity(updateQuantityReq.getNewQuantity());
                cartDao.save(addCartEntity);
            }
            else {
                cartEntity.setQuantity(updateQuantityReq.getNewQuantity());
                cartDao.save(cartEntity);
            }
        }
        else {
            cartDao.delete(cartEntity);
        }

         return 1;
    }

    private List<Cart> mapAllToDomainCartEntity(List<CartEntity> cartEntityList) {

        List <Cart> cartList = new ArrayList <> ();
        for(CartEntity cartEnt:cartEntityList) {
            cartList.add(mapToDomainCartEntity(cartEnt));
        }

         return cartList;
    }

    private Cart mapToDomainCartEntity(CartEntity cartEnt) {

        Cart cart=new Cart();
        //cart.setId(cartEnt.getId());
        //cart.setUserId(cartEnt.getUserId());
        cart.setProductId(cartEnt.getProductId());
        cart.setQuantity(cartEnt.getQuantity());

        return cart;
    }
}