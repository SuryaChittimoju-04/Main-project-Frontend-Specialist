/*eslint-disable*/
// src/components/auth/LoginForm.jsx
import React, { useEffect, useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { useNavigate } from 'react-router-dom';

export const LoginForm = ({ onLogin, onLabLogin }) => {
  const [isDoc, setIsDoc] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    managementId: '',
    isDoc: true,
  });
  useEffect(() => {
    setFormData({ ...formData, isDoc: isDoc });
  }, [isDoc]);
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Card className="w-96 p-6">
        <h1 className="text-2xl font-bold text-center mb-6">{isDoc ? 'Doctor' : 'LabSpecialist'} Login</h1>
        <div className='flex justify-end mb-6'>
          <Button type='button' onClick={() => {
            setIsDoc(!isDoc);
          }} >Switch</Button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
          <Input
            type="text"
            placeholder={`Enter ${isDoc ? 'Hospital' : 'Lab'} ID`}
            value={formData.managementId}
            onChange={(e) => setFormData({ ...formData, managementId: e.target.value })}
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