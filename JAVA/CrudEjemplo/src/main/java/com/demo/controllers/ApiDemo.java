package com.demo.controllers;

import com.demo.model.Usuario;
import com.demo.service.UsuarioService;
import com.demo.service.UsuarioServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.ArrayList;
import java.util.Optional;


@RestController
@RequestMapping("api")
public class ApiDemo {

    @Autowired
    UsuarioService usuarioService;

    @GetMapping("saludar")
    public String saludar(){
        return "Hola mundoi";
    }

    @GetMapping("/all")
    public ArrayList<Usuario> getAllUse() {
        return usuarioService.getAllUser();
    }

    @GetMapping("/find/{id}")
    public Optional<Usuario> getUserById(@PathVariable("id") long id) {
        return usuarioService.getUserById(id);
    }

    @PostMapping("/save")
    public Usuario saveUser(@RequestBody Usuario u) {
        return usuarioService.saveUser(u);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteUserById(@PathVariable("id") long id){
        if(usuarioService.deleteUserById(id))
            return "Usuario eliminado";
        else
            return "No se pudo eliminar el usuario";
    }
}
