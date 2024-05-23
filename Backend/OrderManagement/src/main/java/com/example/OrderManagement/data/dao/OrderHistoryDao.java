package com.example.OrderManagement.data.dao;

import com.example.OrderManagement.data.entities.OrderHistoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface OrderHistoryDao extends JpaRepository<OrderHistoryEntity, Integer> {
    Optional<List<OrderHistoryEntity>> findAllByOrderIdId(int id);
}