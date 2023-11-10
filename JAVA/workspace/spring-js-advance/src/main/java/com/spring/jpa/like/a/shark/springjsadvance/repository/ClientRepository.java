package com.spring.jpa.like.a.shark.springjsadvance.repository;

import org.springframework.stereotype.Repository;

import com.spring.jpa.like.a.shark.springjsadvance.domain.Client;

import org.springframework.data.repository.CrudRepository;


@Repository
public interface ClientRepository extends CrudRepository<Client, Long>{

}
