package com.example.ProductManagement.domain.repositories;

import com.example.ProductManagement.domain.model.Category;
import com.example.ProductManagement.domain.model.Product;

import java.util.HashMap;
import java.util.List;

public interface ProductRepository {
    public Product getProduct(int id);

    public HashMap<String, List<Product>> getAllProducts();

    public List<Category> getAllCategories();

    public List<Product> getSetOfProducts();
}