package com.stpeters.stu.marks.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stpeters.stu.marks.Entity.Car;

public interface CarRepo extends JpaRepository<Car, String>{

}