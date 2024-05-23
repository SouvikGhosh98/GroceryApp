package com.example.ShoppingCartManagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class ShoppingCartManagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShoppingCartManagementApplication.class, args);
	}

}