package com.stpeters.stu.marks.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.stpeters.stu.marks.Entity.Car;
import com.stpeters.stu.marks.Service.CarService;

@RestController
@CrossOrigin("*")
public class CarController {
	
	
	@Autowired
	CarService carService;
	
	@PostMapping("/arun-show-room/car/add")
	public String addNewCar(@RequestBody Car car) {
		
		System.out.println("from react---->"+car);
		
		return carService.saveNewCar(car);
	}

	
	
	
	
	
	

}