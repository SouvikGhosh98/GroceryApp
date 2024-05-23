package com.example.ProductManagement.controller;

import com.example.ProductManagement.domain.model.Category;
import com.example.ProductManagement.domain.model.Product;
import com.example.ProductManagement.domain.services.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.web.embedded.tomcat.ConfigurableTomcatWebServerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/product-service")
@CrossOrigin(originPatterns = "*localhost*")
public class ProductController {

    private final ProductService productService;

    @GetMapping("/getAllProducts")
    public HashMap<String, List<Product>> getAllProducts() {
        HashMap<String,List<Product>> catProductList=new HashMap<>();
        catProductList=productService.getAllProducts();

        return catProductList;
    }

    @GetMapping("/getProduct/{id}")
    public Product getProduct(@PathVariable("id") int id) {
        Product product = new Product();
        product=productService.getProduct(id);
        return product;
    }

    @GetMapping("/getAllCategories")
    public List<Category> getAllCategories() {
        List<Category> categoryList=new ArrayList<>();
        categoryList=productService.getAllCategories();
        return categoryList;
    }

    @GetMapping("/getSetOfProducts")
    public List<Product> getSetOfProducts() {
        List<Product> productList=new ArrayList<>();
        productList=productService.getSetOfProducts();

        return productList;
    }
}