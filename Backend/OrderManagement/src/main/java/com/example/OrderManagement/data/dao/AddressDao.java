package com.example.OrderManagement.data.dao;

import com.example.OrderManagement.data.entities.AddressEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface AddressDao extends JpaRepository<AddressEntity, Integer> {
    Optional<List<AddressEntity>> findAllByUserId(int id);
    Optional<AddressEntity> findById(int id);
}