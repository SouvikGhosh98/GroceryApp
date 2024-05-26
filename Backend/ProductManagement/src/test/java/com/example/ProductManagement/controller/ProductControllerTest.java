package com.example.ProductManagement.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
public class ProductControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void testGetProduct() throws Exception {

        mockMvc.perform(get("/product-service/getProduct/2"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(2))
                .andExpect(jsonPath("$.productName").value("Banana"))
                .andExpect(jsonPath("$.description").value("Ripe yellow bananas"))
                .andExpect(jsonPath("$.price").value(20.0))
                .andExpect(jsonPath("$.imageUrl").value("https://www.shutterstock.com/image-photo/banana-cluster-isolated-600nw-575528746.jpg"))
                .andExpect(jsonPath("$.isAvailable").value(1));
    }
}