package com.spring.jpa.like.a.shark.springjsadvance.domain;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table(name = "client")
public class Client {
	@Id
	@SequenceGenerator(
			name = "client_sequence",
			sequenceName = "client_sequence",
			allocationSize = 1,
			initialValue = 999
			)
	@GeneratedValue(
			strategy = GenerationType.SEQUENCE,
			generator = "client_sequence"
			)
	private Long id;

	@Column(name = "name")
	private String name;
	
	// un cliente solo tiene un usuario
	@OneToOne
	private User user;
	
	// un cliente tiene varias direcciones, y se implementa en ambas clases
	@OneToMany(
			fetch = FetchType.EAGER, // nos trae toda la informacion
			cascade = CascadeType.ALL
			)
	private Set<Address> addresses = new HashSet<>();
	
	// muchos a muchos, un cliente puede tener muchos productos y un producto puede ser de varios clientes
	// en este caso solo se implementa la relacion en esta clase
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(
			name = "client_product",
			joinColumns = {
					@JoinColumn(name = "fk_client")
			},
			inverseJoinColumns = {
					@JoinColumn(name = "fk_product")
			}
			)
	private Set<Product> products = new HashSet<>();

	public Set<Product> getProducts() {
		return products;
	}

	public void setProducts(Set<Product> products) {
		this.products = products;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Set<Address> getAddresses() {
		return addresses;
	}

	public void setAddresses(Set<Address> addresses) {
		this.addresses = addresses;
	}

	

	public Client(Long id, String name, User user, Set<Address> addresses, Set<Product> products) {
		super();
		this.id = id;
		this.name = name;
		this.user = user;
		this.addresses = addresses;
		this.products = products;
	}

	public Client() {
		super();
		// TODO Auto-generated constructor stub
	}

	
}
