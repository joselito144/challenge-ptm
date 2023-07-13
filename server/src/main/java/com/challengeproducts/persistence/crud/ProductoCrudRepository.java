package com.challengeproducts.persistence.crud;

import com.challengeproducts.persistence.entity.Producto;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface ProductoCrudRepository extends CrudRepository<Producto, Integer> {
    Optional<Producto> findById(Integer id);
}
