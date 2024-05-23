package com.example.LoginManagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class LoginManagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(LoginManagementApplication.class, args);
	}

}