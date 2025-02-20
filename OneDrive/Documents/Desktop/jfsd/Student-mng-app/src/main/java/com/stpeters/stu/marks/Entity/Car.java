package com.stpeters.stu.marks.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Car {
	
	@Id
	String model;
	String brand;
	String year;
	int price;
	String imgUrl;
	public Car() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Car(String model, String brand, String year, int price, String imgUrl) {
		super();
		this.model = model;
		this.brand = brand;
		this.year = year;
		this.price = price;
		this.imgUrl = imgUrl;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getYear() {
		return year;
	}
	public void setYear(String year) {
		this.year = year;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getImgUrl() {
		return imgUrl;
	}
	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}
	@Override
	public String toString() {
		return "Car [model=" + model + ", brand=" + brand + ", year=" + year + ", price=" + price + ", imgUrl=" + imgUrl
				+ "]";
	}
	
	
	
	
	
	
	

}