import { useState, useEffect, useRef } from 'react';
import products from './data.js';
import nike from './img/nike.png';
import './register.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Register() {
    
  const navigate = useNavigate();

  const [register, setRegister] = useState(false);
  const [logIn, setLogIn] = useState(false);
  const [fill, setFill] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [active, setActive] = useState(true);
  const headerRef = useRef(null);
  const btnRef = useRef(null);
  const userNameref = useRef(null);
  const passwordRef = useRef(null);

  async function createUser(e) {
    e.preventDefault(); // Prevent form from submitting
    const userName = userNameref.current.value;
    const password = passwordRef.current.value;
  
    if (userName && password) {
      const objString = JSON.stringify({
        "user_name": userName,
        "password": password,
      });
  
      try {
        const response = await fetch("http://localhost:3000/add/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: objString,
          credentials: "include", // Allow cookies or credentials with request
        });
  
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
  
        const responseData = await response.json();
        console.log("User Created:", responseData);
  
        if (responseData) {
          setLogIn(true);
          // const newJwtToken = responseData.jwt;
          // if (newJwtToken) {
          //   localStorage.setItem("jwt", newJwtToken); // Store JWT
          //   console.log("Stored JWT:", localStorage.getItem("jwt"));
          // }
          userNameref.current.value = ""; // Clear username field
          passwordRef.current.value = ""; // Clear password field
          navigate("/"); // Redirect to home
        }
      } catch (error) {
        console.error("Error creating user:", error);
      }
    } else {
      setFill(true); // Show an error message if fields are empty
    }
  }
  
  async function logInUser(e) {
    e.preventDefault(); // Prevent form from submitting
    const userName = userNameref.current.value;
    const password = passwordRef.current.value;
  
    if (!userName || !password) {
      setFill(true); // Show error message if fields are empty
      return;
    }
  
    const objString = JSON.stringify({
      "user_name": userName,
      "password": password,
    });
  
    console.log("Sending request to server with payload:", objString); // Debug payload
  
    try {
      const response = await fetch("http://localhost:3000/signIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: objString,
        credentials: "include", 
      });
  
      if (!response.ok) {

        throw new Error(`HTTP Error: ${response.status}`);
      }
  
      const responseData = await response.json(); 
      console.log("User Logged In Response:", responseData); 
  
      if (responseData) {
        setLogIn(true);
        // If JWT handling is needed:
        // const newJwtToken = responseData.jwt;
        // if (newJwtToken) {
        //   localStorage.setItem("jwt", newJwtToken); // Store JWT
        //   console.log("Stored JWT:", localStorage.getItem("jwt"));
        // }
        userNameref.current.value = ""; // Clear username field
        passwordRef.current.value = ""; // Clear password field
        navigate("/"); // Redirect to home
      }
    } catch (error) {
      console.error("Error logging in user:", error.message);
      // Optionally display an error message to the user
    }
  }
  

  return (
    <div>
      <header className={active ? "header-bar2" : "header-bar"} ref={headerRef}>
        <div className="logo">
        <Link to={'/'}><img src={nike} alt="nike logo"/></Link>
        </div>
        <div className="cart-info">
          <div></div>
        </div>
      </header>

      <section className='register-card'>
        <div className='card'>
          <form>
            <h2>Register</h2>
            <div className='input-group'>
              <label htmlFor='username'>Username</label>
              <input type='text' id='username' ref={userNameref} placeholder='Enter your username' required />
            </div>
            <div className='input-group'>
              <label htmlFor='password'>Password</label>
              <input type='password' ref={passwordRef} id='password' placeholder='Enter your password' required />
            </div>
            <button type='submit' className='submit-btn' onClick={logInUser} ref={btnRef}>Log In</button>
          </form>

          <div className='sign-up-option'>
            <p>Don't have an account?</p>
            <button className='sign-up-btn' onClick={createUser}>Sign Up</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;