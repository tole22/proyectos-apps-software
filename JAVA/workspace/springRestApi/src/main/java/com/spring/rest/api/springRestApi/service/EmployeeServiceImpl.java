package com.spring.rest.api.springRestApi.service;


import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.spring.rest.api.springRestApi.model.Employee;
import com.spring.rest.api.springRestApi.reposotory.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@Override
	public List<Employee> getEmployees() {
		return employeeRepository.findAll();
	}
	
	@Override
	public Employee saveEmployee(Employee employee) {
		Employee e = employeeRepository.save(employee);
		return e;
	}

	@Override
	public Employee getSinglEmployee(Long id) {
		Optional<Employee> employee = employeeRepository.findById(id);
		if (employee.isPresent()) {
			return employee.get();
		}
		throw new RuntimeException("Employee is not found for the id: " + id);
	}

	@Override
	public void deleteEmployee(Long id) {
		employeeRepository.deleteById(id);
	}

	@Override
	public Employee updateEmployee(Employee employee) {
		return employeeRepository.save(employee);
	}

	@Override
	public List<Employee> getEmployeesByName(String name) {
		
		return employeeRepository.findByName(name);
	}

	@Override
	public List<Employee> getEmployeesByNameAndLocation(String name, String location) {
		return employeeRepository.findByNameAndLocation(name, location);
	}

	@Override
	public List<Employee> getEmployeesByKeyword(String name) {
		Sort sort = Sort.by(Sort.Direction.DESC, "id");
		return employeeRepository.findByNameContaining(name, sort);
	}

	@Override
	public List<Employee> getEmployeesByNameORLocationJPQL(String name, String location) {
		return employeeRepository.getEmployeesByNameORLocationJPQL(name, location);
	}
}
