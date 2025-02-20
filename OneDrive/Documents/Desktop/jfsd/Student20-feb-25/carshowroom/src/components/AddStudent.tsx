//import React from "react";
import axios from "axios";
import { useState } from "react";
import "../css/my-mar-stu.css";
import NavBar from "./NavBar";

export default function AddStudent() {
  const [rollNo, setRollNo] = useState("");
  const [name, setName] = useState("");
  const [math, setMath] = useState("");
  const [science, setScience] = useState("");
  const [english, setEnglish] = useState("");
  const [fee, setFee] = useState("");
  const [course, setCourse] = useState("");

  const saveStu = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submit button clicked!!!!");
    console.log("roll no--->" + rollNo);
    console.log("name--->" + name);
    console.log("maths--->" + math);
    console.log("science--->" + science);
    console.log("english--->" + english);
    console.log("fee--->" + fee);
    console.log("course--->" + course);

    const student = { rollNo, name, math, science, english, fee, course };

    axios.post("http://localhost:8080/stu/mng/add", student).then((res) => {
      console.log(res.data);
    });
  };
  const getRollNo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRollNo(e.target.value);
  };
  const getName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const getMaths = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMath(e.target.value);
  };
  const getScience = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScience(e.target.value);
  };
  const getEnglish = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnglish(e.target.value);
  };
  const getFee = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFee(e.target.value);
  };

  const getCourse = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCourse(e.target.value);
  };

  return (
    <div>
      <NavBar />
      <form onSubmit={saveStu} className="stu-add-mar">
        <div className="form-group">
          <label>RollNo</label>
          <input
            type="text"
            onChange={getRollNo}
            className="form-control"
            placeholder="Enter Roll no"
          />
        </div>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            onChange={getName}
            className="form-control"
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group">
          <label>Math Marks</label>
          <input
            type="text"
            onChange={getMaths}
            className="form-control"
            placeholder="Enter Marks "
          />
        </div>
        <div className="form-group">
          <label>Sci Marks</label>
          <input
            type="text"
            onChange={getScience}
            className="form-control"
            placeholder="Enter Marks "
          />
        </div>
        <div className="form-group">
          <label>Eng Marks</label>
          <input
            type="text"
            onChange={getEnglish}
            className="form-control"
            placeholder="Enter Marks "
          />
        </div>
        <div className="form-group">
          <label>Fee</label>
          <input
            type="text"
            onChange={getFee}
            className="form-control"
            placeholder="Enter Fee"
          />
        </div>
        <div className="form-group">
          <label>Course</label>
          <input
            type="text"
            onChange={getCourse}
            className="form-control"
            placeholder="Enter Course"
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
