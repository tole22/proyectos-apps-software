package com.demo.service;

import com.demo.model.Usuario;
import com.demo.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class UsuarioServiceImpl implements UsuarioService{

    @Autowired
    UsuarioRepository usuarioRepository;
    @Override
    public ArrayList<Usuario> getAllUser() {
        return (ArrayList<Usuario>) usuarioRepository.findAll();
    }

    @Override
    public Optional<Usuario> getUserById(long id) {
        return usuarioRepository.findById(id);
    }

    @Override
    public Usuario saveUser(Usuario u) {
        return usuarioRepository.save(u);
    }

    @Override
    public boolean deleteUserById(long id) {
        try {
            Optional<Usuario> u = getUserById(id);
            usuarioRepository.delete(u.get());
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
