package com.example.OrderManagement.data.dao;

import com.example.OrderManagement.data.entities.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.List;

public interface OrderDao extends JpaRepository<OrderEntity, Integer> {

    Optional<List<OrderEntity>> findAllByAddressIdId(int id);
    Optional<OrderEntity> findById(int id);
}