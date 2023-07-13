package com.challengeproducts.domain.repository;

import com.challengeproducts.domain.Product;

import java.util.List;
import java.util.Optional;

public interface ProductRepository {
    List<Product> getAll();
    Optional<Product> getProduct(int productId);
    Product save(Product product);
    Product update(Product product);
    void delete(int productId);
}
