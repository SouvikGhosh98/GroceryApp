package com.example.LoginManagement.data.dao;

import com.example.LoginManagement.data.entities.CredentialsEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CredentialsDao extends JpaRepository<CredentialsEntity, Integer> {
    Optional<CredentialsEntity> findByEmailId(String email);
}