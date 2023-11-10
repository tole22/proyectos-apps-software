package com.spring.jpa.like.a.shark.springjsadvance.domain;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table(name = "address")
public class Address {
	@Id
	@SequenceGenerator(
			name = "address_sequence",
			sequenceName = "address_sequence",
			allocationSize = 1,
			initialValue = 500
			)
	@GeneratedValue(
			strategy = GenerationType.SEQUENCE,
			generator = "address_sequence"
			)
	private Long id;
	
	@Column(name = "street")
	private String street;
	
	@Column(name = "number")
	private String number;
	
	@ManyToOne(
			fetch = FetchType.LAZY,
			optional = false  // dato obligatorio
			)
	@JoinColumn(name = "client_id")
	private Client client; 
	

	

	public Address(Long id, String street, String number, Client client) {
		super();
		this.id = id;
		this.street = street;
		this.number = number;
		this.client = client;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public Address() {
		super();
		// TODO Auto-generated constructor stub
	}

	
}
