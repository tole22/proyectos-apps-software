package com.example.Mongo.repository;

import com.example.Mongo.documentos.Usuarios;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UsuarioRepository extends MongoRepository<Usuarios, Integer> {
}
