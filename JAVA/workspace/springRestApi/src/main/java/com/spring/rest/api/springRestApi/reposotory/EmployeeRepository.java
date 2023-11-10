package com.spring.rest.api.springRestApi.reposotory;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.spring.rest.api.springRestApi.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

	List<Employee> findByName(String name);
	
	// SELECT * FROM table WHERE name="maxi" AND location="India"
	List<Employee> findByNameAndLocation(String name, String location);
	
	// SELECT * FROM table WHERE name LIKE "%max%"
	List<Employee> findByNameContaining(String keyword, Sort sort);
	
	@Query("FROM Employee WHERE name = :name OR location =:location")
	List<Employee> getEmployeesByNameORLocationJPQL(@Param("name") String name, String location);
}
