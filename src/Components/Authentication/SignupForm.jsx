import React, { useState } from 'react'
import "../Styles/Authentication.css";
import {Link, useNavigate} from "react-router-dom";
import { auth } from '../../firebase';
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";

export default function SignupForm() {
  const [error, setError] = useState("");
  const [submitButton, setSubmitButton] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    password: "",
    confirmPassword: "",
  })
  const navigate = useNavigate();
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if(formData.password !== formData.confirmPassword){
      setError("Password doesn't match");
      return;
    }else{
      setError("");
    }
    setSubmitButton(true);
    createUserWithEmailAndPassword(auth, formData.email, formData.password).then(
      async(res) => {
        setSubmitButton(false);
        setError("");
        const user = res.user;
        await updateProfile(user, {
          displayName: formData.name
        });
        navigate("/");
        console.log(user);
      }
    ).catch(err=>{
      setSubmitButton(false);
      setError(err.message);
    });
  }
  return (
    <div className='signup-container'>
        <div className="auth-heading">
          Signup
          <p>Singup to get latest news updates!</p>
          <p style={{color: "red", marginTop: "1vh"}}>{error ? error : ""}</p>
        </div>
        <div className="form-container">
          <div className="row">
            <input type="text" name='name' required onChange={handleChange} placeholder='Your Name' />
            <input type="email" name='email' required onChange={handleChange} placeholder='Email Address' />
          </div>
          <div className="row">
            <input type="password" name='password' required onChange={handleChange} placeholder='Enter Password' />
            <input type="password" name='confirmPassword' required onChange={handleChange} placeholder='Confirm Password' />
          </div>

        </div>
        <div className="button-container">
            <button type="submit" disabled={submitButton} className="auth-button" onClick={handleSubmit}>Signup</button>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    </div>
  )
}
