import React, { useState } from 'react'
import "../Styles/Authentication.css";
import {Link, useNavigate} from "react-router-dom"
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth } from "../../firebase";

export default function LoginForm() {
  const [error, setError] = useState("");
  const [submitButton, setSubmitButton] = useState(false);

  const [formData, setFormData] = useState({
    email: "", 
    password: "",
  })
  const navigate = useNavigate();
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitButton(true);
    signInWithEmailAndPassword(auth, formData.email, formData.password).then(
      async(res) => {
        setSubmitButton(false);
        setError("");
        const user = res.user;
        navigate("/");
        console.log(user);
      }
    ).catch(err=>{
      setSubmitButton(false);
      setError(err.message);
      console.log(err);
    });
  }
  return (
    <div className='signup-container'>
        <div className="auth-heading" style={{paddingLeft:"3em"}}>
          Login
          <p>Login To Read Trending Updates!</p>
          <p style={{color: "red", marginTop: "1vh"}}>{error ? error : ""}</p>
        </div>
        <div className="form-container">
          <div className="row row-login">
            <input type="email" name='email' required onChange={handleChange} placeholder='Email Address' />
          </div>
          <div className="row row-login">
            <input type="password" name='password' required onChange={handleChange} placeholder='Enter Password' />
          </div>

        </div>
        <div className="button-container">
            <button type="submit" disabled={submitButton} className="auth-button" onClick={handleSubmit}>Login</button>
            <p>Are You A New User? <Link to="/signup">SignUp</Link></p>
        </div>
    </div>
  )
}
