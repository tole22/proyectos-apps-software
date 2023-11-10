package com.example.democrud.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.democrud.models.Persona;

public interface Repository  extends JpaRepository<Persona, Long>{

}
