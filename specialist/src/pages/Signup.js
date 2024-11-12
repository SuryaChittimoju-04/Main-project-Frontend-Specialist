// src/pages/Signup.jsx
import React, { useEffect } from 'react';
import { SignupForm } from '../components/auth/Signup';
import {  useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Signup = ({ onSignup, onNavigateLogin }) => {
  const userdata = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();
  useEffect(() => {
    if(userdata){
      if(userdata?.statusCode===200){
        navigate("/home");
      }
    }
  }, [userdata,navigate]);
  return(
  <SignupForm onSignup={onSignup} onNavigateLogin={onNavigateLogin} />
)};

export default Signup;