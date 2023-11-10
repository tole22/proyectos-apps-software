package com.example.democrud.controllers;

import java.security.PublicKey;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.democrud.models.Persona;

import com.example.democrud.repository.Repository;

@RestController
public class Controller {
	
	@Autowired
	private Repository repository;
	
	@GetMapping()
	public String index() {
		return "CONECTADO";
	}
	
	@GetMapping("personas")
	public List<Persona> getPersonas() {
		return repository.findAll();
	}
	
	@PostMapping("grabar")
	public String save(@RequestBody Persona persona) {
		repository.save(persona);
		return "Grabado";
	}
	
	@PutMapping("editar/{id}")
	public String update(@PathVariable Long id, @RequestBody Persona persona) {
		Persona updatePersona = repository.findById(id).get();
		updatePersona.setNombre(persona.getNombre());
		updatePersona.setTelefono(persona.getTelefono());
		repository.save(updatePersona);
		return "Editado correctamente";
	}
	
	@DeleteMapping("delete/{id}")
	public String delete(@PathVariable Long id) {
		Persona deletePersona = repository.findById(id).get();
		repository.delete(deletePersona);
		return "Eliminado";
	}
}
