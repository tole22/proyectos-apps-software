package com.spring.rest.api.springRestApi.service;

import java.util.List;

import com.spring.rest.api.springRestApi.model.Employee;

public interface EmployeeService {

		List<Employee> getEmployees();
		
		Employee saveEmployee (Employee employee);
		
		Employee getSinglEmployee (Long id);
		
		void deleteEmployee(Long id);
		
		Employee updateEmployee (Employee employee);
		
		List<Employee> getEmployeesByName(String name);
		
		List<Employee> getEmployeesByNameAndLocation(String name, String location);
		
		List<Employee> getEmployeesByKeyword(String name);
		
		List<Employee> getEmployeesByNameORLocationJPQL(String name, String location);
}
