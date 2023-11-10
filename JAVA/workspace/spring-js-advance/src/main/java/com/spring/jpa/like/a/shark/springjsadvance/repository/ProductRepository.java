package com.spring.jpa.like.a.shark.springjsadvance.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.spring.jpa.like.a.shark.springjsadvance.domain.Product;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long> {

}
