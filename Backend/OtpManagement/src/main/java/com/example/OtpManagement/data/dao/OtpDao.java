package com.example.OtpManagement.data.dao;

import java.util.Optional;
import com.example.OtpManagement.data.entities.OtpEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OtpDao extends JpaRepository<OtpEntity,Integer> {

    Optional<OtpEntity> findByEmail(String email);
}