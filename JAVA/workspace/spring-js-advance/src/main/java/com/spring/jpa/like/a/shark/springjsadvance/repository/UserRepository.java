package com.spring.jpa.like.a.shark.springjsadvance.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.spring.jpa.like.a.shark.springjsadvance.domain.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

}
