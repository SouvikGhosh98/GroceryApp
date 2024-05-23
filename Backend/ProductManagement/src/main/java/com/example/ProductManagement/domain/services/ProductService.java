package com.example.ProductManagement.domain.services;

import com.example.ProductManagement.domain.model.Category;
import com.example.ProductManagement.domain.model.Product;
import com.example.ProductManagement.domain.repositories.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;
    public Product getProduct(int id) {
        Product product=new Product();
        product=productRepository.getProduct(id);
        return product;
    }

    public HashMap<String, List<Product>> getAllProducts() {
        HashMap<String,List<Product>> catProductList=new HashMap<>();
        catProductList=productRepository.getAllProducts();

        return catProductList;
    }

    public List<Category> getAllCategories() {
        List<Category> categoryList=new ArrayList<>();
        categoryList=productRepository.getAllCategories();
        return categoryList;
    }

    public List<Product> getSetOfProducts() {
        List<Product> productList=new ArrayList<>();
        productList=productRepository.getSetOfProducts();

        return productList;
    }
}