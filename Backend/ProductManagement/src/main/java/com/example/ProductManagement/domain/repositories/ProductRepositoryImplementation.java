package com.example.ProductManagement.domain.repositories;

import com.example.ProductManagement.data.dao.CategoryDao;
import com.example.ProductManagement.data.dao.ProductDao;
import com.example.ProductManagement.data.entities.CategoryEntity;
import com.example.ProductManagement.data.entities.ProductEntity;
import com.example.ProductManagement.domain.model.Category;
import com.example.ProductManagement.domain.model.Product;
import com.example.ProductManagement.exception.GlobalException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Limit;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Component
@RequiredArgsConstructor
public class ProductRepositoryImplementation implements ProductRepository {

    private final ProductDao productDao;
    private final CategoryDao categoryDao;
    public Product getProduct(int id) {
        ProductEntity productEntity = new ProductEntity();
        productEntity=productDao.findById(id).orElseThrow(
                () -> new GlobalException("No Product Found"));
        return mapToDomainProductEntity(productEntity);
    }

    public HashMap<String, List<Product>> getAllProducts() {
        List<CategoryEntity> catEntList=new ArrayList<>();
        HashMap<String,List<Product>> catProductList=new HashMap<>();
        catEntList=categoryDao.findAll();

        for(CategoryEntity catEnt:catEntList) {

            List<ProductEntity> prodEntList=new ArrayList<>();
            prodEntList=productDao.findAllByCategoryIdId(catEnt.getId()).orElseThrow(
                    () -> new GlobalException("No Product Found"));

            List<Product> prodList=new ArrayList<>();
            prodList=mapAllToDomainProductEntity(prodEntList);
            catProductList.put(catEnt.getCategoryName(),prodList);
        }

        return catProductList;
    }

    public List<Category> getAllCategories() {
        List<CategoryEntity> categoryEntityList=new ArrayList<>();
        List<Category> categoryList=new ArrayList<>();
        categoryEntityList=categoryDao.findAll();
        for(CategoryEntity catEnt:categoryEntityList) {
            categoryList.add(mapToDomainCategoryEntity(catEnt));
        }

        return categoryList;
    }

    public List<Product> getSetOfProducts() {
        List<ProductEntity> prodEntList=new ArrayList<>();
        prodEntList=productDao.findAll();
        List<Product> productList=new ArrayList<>();
        for(int i=0;i<Math.min(8,prodEntList.size());i++) {
            productList.add(mapToDomainProductEntity(prodEntList.get(i)));
        }

        return productList;
    }

    private Category mapToDomainCategoryEntity(CategoryEntity categoryEntity) {
        Category category=new Category();
        category.setId(categoryEntity.getId());
        category.setCategoryName(categoryEntity.getCategoryName());

        return category;
    }

    private List<Product> mapAllToDomainProductEntity(List<ProductEntity> prodEntList) {
        List<Product> prodList=new ArrayList<>();
        for(ProductEntity prodEnt:prodEntList) {
            prodList.add(mapToDomainProductEntity(prodEnt));
        }

        return prodList;
    }

    private Product mapToDomainProductEntity(ProductEntity productEntity) {
        Product product = new Product();

        product.setId(productEntity.getId());
        product.setProductName(productEntity.getProductName());
        product.setDescription(productEntity.getDescription());
        //product.setCategoryId(productEntity.getCategoryId());
        product.setPrice(productEntity.getPrice());
        product.setImageUrl(productEntity.getImageUrl());
        product.setIsAvailable(productEntity.getIsAvailable());

        return product;
    }
}