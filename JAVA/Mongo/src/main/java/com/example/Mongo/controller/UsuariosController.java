package com.example.Mongo.controller;

import com.example.Mongo.documentos.Usuarios;
import com.example.Mongo.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Usuarios")
public class UsuariosController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @PostMapping
    public ResponseEntity<?> saveUsuario(@RequestBody Usuarios user){
        try {
            Usuarios userSave = usuarioRepository.save(user);
            return new ResponseEntity<Usuarios>(userSave, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public ResponseEntity<?> getUsuarios() {
        try {
            List<Usuarios> usuarios = usuarioRepository.findAll();
            return new ResponseEntity<List<Usuarios>>(usuarios, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping
    public ResponseEntity<?> updateUsuario(@RequestBody Usuarios user){
        try {
            Usuarios userSave = usuarioRepository.save(user);
            return new ResponseEntity<Usuarios>(userSave, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> deleteUsuario(@PathVariable("id") Integer id){
        try {
            usuarioRepository.deleteById(id);
            return new ResponseEntity<String>("Usuario eliminado", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
