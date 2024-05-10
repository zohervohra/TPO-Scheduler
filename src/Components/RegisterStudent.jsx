import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { useHistory } from "react-router-dom";

export default function RegisterStudent() {
  let [isTPO, setIsTPO] = useState(false);
  const roleHandler = ()=>{
    console.log(isTPO);
    setIsTPO(!isTPO);
  }




  const handleRegister = async () => {
    if (isTPO) {
      // console.log("TPO");
      try {
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const college = document.getElementById("college").value;
      const password = document.getElementById("password").value;

      const userData = {
        username,
        email,
        college,
        password,
        isTPO
      };

      const response = await axios.post("https://vegahackathonbackend-9c856453c60a.herokuapp.com/api/tpo", userData);
      const responseData = response.data;
      const token = response.data.token;

      // Do something with the response data and headers
      // console.log(responseData);
      if (responseData.success) {
        // Handle successful login/signup, e.g., redirect to dashboard
        localStorage.setItem('X-auth-token', token);
        // localStorage.setItem("test", 'soham')
        window.location.replace("/")
        // console.log(isLogin ? 'Login successful' : 'Signup successful');
      } else {
        // Handle login/signup failure, show error message to the user
        alert(data.error)
        console.error('Authentication failed:', data.error);
      }
    } catch (error) {
      console.error(error);
    }
    } else {
      console.log('student');
    try {
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const college = document.getElementById("college").value;
      const password = document.getElementById("password").value;
      const isStudent = !isTPO;

      const userData = {
        username,
        email,
        college,
        password,
        isStudent
      };

      const response = await axios.post("https://vegahackathonbackend-9c856453c60a.herokuapp.com/api/student", userData);
      const responseData = response.data;
      const token = response.data.token;

      // Do something with the response data and headers
      console.log(responseData);
      if (responseData.success) {
        // Handle successful login/signup, e.g., redirect to dashboard
        localStorage.setItem('X-auth-token', token);
        // localStorage.setItem("test", 'soham')
        window.location.replace("/")
      } else {
        // Handle login/signup failure, show error message to the user
        alert(data.error)
        console.error('Authentication failed:', data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };
}


  return (
    <div className="mt-[150px]">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm mx-auto max-w-md px-10">
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-bold mt-3">Create an account</h1>
        </div>
        <div className="space-y-4 mt-10 mb-5">
          <div className="space-y-2">
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="username"
              placeholder="Username"
              required=""
            />
          </div>
          <div className="space-y-2">
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="email"
              placeholder="Email"
              required=""
              type="email"
            />
          </div>
          <div className="space-y-2">
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="college"
              placeholder="College Name"
              required=""
            />
          </div>
          <div className="space-y-2">
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="password"
              required=""
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="dropdown-select">
            <select name="cars" id="cars" onChange={()=>{roleHandler()}}>
              <option value="volvo">Student</option>
              <option value="saab">TPO</option>
            </select>
          </div>
          <button
            onClick={()=>{handleRegister()}}
            stlye={{ marginBottom: "10px" }}
            className=" bg-secondary inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-seconbdary text-primary-foreground hover:bg-seconbdary/90 h-10 px-4 py-2 w-full "
          >
            Sign Up
          </button>
        </div>

        <div className="mt-1 text-center text-sm pb-3">
          <small>
            Already have an account?
            <Link className="underline" to="/Login">
              Login
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}
