package com.example.ShoppingCartManagement.data.dao;

import java.util.List;
import java.util.Optional;
import com.example.ShoppingCartManagement.data.entities.CartEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartDao extends JpaRepository <CartEntity, Integer> {
    Optional<List<CartEntity>> findAllByUserId(int id);
    Optional<CartEntity> findByUserIdAndProductId(int userId, int productId);

    void deleteAllByUserId(int userId);
}