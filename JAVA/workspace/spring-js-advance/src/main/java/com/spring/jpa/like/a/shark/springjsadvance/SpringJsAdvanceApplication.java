package com.spring.jpa.like.a.shark.springjsadvance;

import java.util.PrimitiveIterator.OfDouble;
import java.util.Set;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.spring.jpa.like.a.shark.springjsadvance.domain.Address;
import com.spring.jpa.like.a.shark.springjsadvance.domain.Client;
import com.spring.jpa.like.a.shark.springjsadvance.domain.Product;
import com.spring.jpa.like.a.shark.springjsadvance.domain.User;
import com.spring.jpa.like.a.shark.springjsadvance.repository.AddressRepository;
import com.spring.jpa.like.a.shark.springjsadvance.repository.ClientRepository;
import com.spring.jpa.like.a.shark.springjsadvance.repository.ProductRepository;
import com.spring.jpa.like.a.shark.springjsadvance.repository.UserRepository;

@SpringBootApplication
public class SpringJsAdvanceApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringJsAdvanceApplication.class, args);
	}
	
	@Bean
	CommandLineRunner commandLineRunner(
			UserRepository userRepository,
			ClientRepository clientRepository,
			AddressRepository addressRepository,
			ProductRepository productRepository
			) {
		return ArgsAnnotationPointcut -> {
			User user1 = userRepository.save(new User(null, "maxi22", "maxi2222"));
			Client client1 = clientRepository.save(new Client(null, "usermaxi22", user1, null, null));
			
			// Addresses
			Address address1 = addressRepository.save(new Address(null, "460 esq 12b", "1900", client1));
			Address address2 = addressRepository.save(new Address(null, "460 esq 12b", "2900", client1));
			Address address3 = addressRepository.save(new Address(null, "355 esq 12b", "900", client1));
			
			// products
			Product p1 = productRepository.save(new Product(null, "Calculadora", 1300.0));
			Product p2 = productRepository.save(new Product(null, "MAkbook", 300.0));
			Product p3 = productRepository.save(new Product(null, "Aspiradora", 3000.0));
			Product p4 = productRepository.save(new Product(null, "Celular", 1800.0));
			
			client1.setAddresses(Set.of(address1, address2, address3));
			client1.setProducts(Set.of(p1, p2, p3, p4));
			
			Client leoClient = clientRepository.save(client1);
			
			System.out.println(leoClient.getName());
			System.out.println(leoClient.getUser().getUsername());
			
			leoClient.getProducts().forEach(p -> System.out.println("Producto: "+ p.getName()+ ", price: " + p.getPrice()));
		};
	}

}
