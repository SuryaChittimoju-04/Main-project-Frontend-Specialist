/*eslint-disable*/
// src/components/auth/LoginForm.jsx
import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { useNavigate } from 'react-router-dom';

export const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    hospitalId: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Card className="w-96 p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Doctor Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
          <Input
            type="text"
            placeholder="Enter Hospital ID"
            value={formData.hospitalId}
            onChange={(e) => setFormData({ ...formData, hospitalId: e.target.value })}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Input
            type="text"
            placeholder="Enter Email ID"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Input
            type="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" className="w-full">Login</Button>
          <p className="text-center">
            New patient? <button
              onClick={() => navigate("/signup")}
              className="text-blue-500 hover:underline"
              type="button"
            >
              Sign up
            </button>
          </p>
        </form>
      </Card>
    </div>
  );
};