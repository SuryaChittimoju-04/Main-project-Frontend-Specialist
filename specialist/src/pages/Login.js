// src/pages/Login.jsx
import React, { useEffect } from 'react';
import { LoginForm } from '../components/auth/LoginForm';
import auth from '../store/auth/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = ({ onNavigateSignup }) => {
  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();
  useEffect(() => {
    if(userdata){
      if(userdata?.statusCode===200){
        navigate("/home");
      }
    }
  }, [userdata,navigate]);
  const handleLogin = (aadhar) => {
    dispatch(auth.loginRequest(aadhar));
  };
  return (
    <LoginForm onLogin={handleLogin} onNavigateSignup={onNavigateSignup} />
  )
};

export default Login;