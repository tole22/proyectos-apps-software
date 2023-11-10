package com.spring.rest.api.springRestApi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.rest.api.springRestApi.model.Employee;
import com.spring.rest.api.springRestApi.service.EmployeeService;

import jakarta.validation.Valid;

@RestController
public class EmployeeController {
	
	@Autowired
	private EmployeeService employeeService;
	
	@Value("${app.name: Default App Name}")
	private String appName;
	
	@Value("${app.version: version1}")
	private String appVersion;
	
	@GetMapping("/version")
	public String getAppDetails() {
		return appName + " - " + appVersion;
	}
	

	@GetMapping("/employees")
	public List<Employee> getEmployees() {
		return employeeService.getEmployees();
	}
	
	@GetMapping("/employees/{id}")
	public Employee getEmployee(@PathVariable("id") Long id) {
		return employeeService.getSinglEmployee(id);
	}
	
	@PostMapping("/employees")
	public String saveEmployee(@Valid @RequestBody Employee employee) {
		return employeeService.saveEmployee(employee).toString();
	}
	
	@DeleteMapping("/employees") 
	public String deleteEmployee(@RequestParam("id") Long id) {
		employeeService.deleteEmployee(id);
		return "delete employee:" + id;
	}
	
	@PutMapping("/employees/{id}")
	public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
		employee.setId(id);
		return employeeService.saveEmployee(employee);
	}
	
	@GetMapping("/employees/filterByName")
	public ResponseEntity<List<Employee>> getEmployeesByNamEntity(@RequestParam String name) {
		return new ResponseEntity<List<Employee>>(employeeService.getEmployeesByName(name), HttpStatus.OK);
	}
	
	@GetMapping("/employees/filterByNameAndLocation")
	public ResponseEntity<List<Employee>> getEmployeesByNameAndLocation(@RequestParam String name, @RequestParam String location) {
		return new ResponseEntity<List<Employee>>(employeeService.getEmployeesByNameAndLocation(name, location), HttpStatus.OK);
	}
	
	@GetMapping("/employees/filterByKeyword")
	public ResponseEntity<List<Employee>> getEmployeesByKeyword(@RequestParam String name) {
		return new ResponseEntity<List<Employee>>(employeeService.getEmployeesByKeyword(name), HttpStatus.OK);
	}
	
	@GetMapping("/employees/filterByNameORLocationJPQL")
	public ResponseEntity<List<Employee>> getEmployeesByNameORLocationJPQL(@RequestParam String name, @RequestParam String location) {
		return new ResponseEntity<List<Employee>>(employeeService.getEmployeesByNameORLocationJPQL(name, location), HttpStatus.OK);
	}
}

