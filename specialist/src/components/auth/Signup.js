// src/components/auth/SignupForm.jsx
import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { useNavigate } from 'react-router-dom';
import { User, Lock, Mail, Stethoscope, PhoneCall, Building } from 'lucide-react';

export const SignupForm = ({ onSignup, onNavigateLogin }) => {
  const [formData, setFormData] = useState({
    hospitalId: '',
    name: '',
    email: '',
    password: '',
    phone: '',
    gender: '',
    specialization: '',
    isAffiliated: false,
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Card className="w-[480px] p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Doctor Registration</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div className='relative'>
            <Input
              className="pl-10"
              placeholder="Hospital Id"
              value={formData.hospitalId}
              onChange={(e) => setFormData({ ...formData, hospitalId: e.target.value })}
              required
            />
            <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          </div>
          <div className='relative'>
            <Input
              className="pl-10"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          </div>
          <div className='relative'>
            <Input
              type="email"
              placeholder="Enter your email"
              className="pl-10"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          </div>
          <div className="relative">
            <Input
              type="password"
              placeholder="Enter Password"
              value={formData.dob}
              onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
              required
              className="pl-10"
            />
            <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          </div>
          <div className='relative'>
            <Input
              type="tel"
              className="pl-10"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
              maxLength={10}
              required
            />
            <PhoneCall className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          </div>
          <div className='relative'>
            <select className="w-full p-2 pl-10 border border-gray-300 rounded mt-1"
              value={formData.gender}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
              required>
              <option value="">Select Gender</option>
              {[{ gender: "Male" }, { gender: "Female" }].map((gender) => (
                <option value={gender.gender} key={gender.gender}>{gender.gender}</option>
              ))}
            </select>
            <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          </div>
          <div className='relative'>
            <select className="w-full p-2 pl-10 border border-gray-300 rounded mt-1"
              value={formData.gender}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
              required>
              <option value="">Specialization</option>
              {[{ gender: "Male" }, { gender: "Female" }].map((gender) => (
                <option value={gender.gender} key={gender.gender}>{gender.gender}</option>
              ))}
            </select>
            <Stethoscope className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          </div>
          <div className='relative'>
            <select className="w-full p-2 pl-10 border border-gray-300 rounded mt-1"
              value={formData.gender}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
              required>
              <option value="">Is Affiliated</option>
              {[{ gender: "Male" }, { gender: "Female" }].map((gender) => (
                <option value={gender.gender} key={gender.gender}>{gender.gender}</option>
              ))}
            </select>
              <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          </div>
          <Button type="submit" className="w-full">Register</Button>
          <p className="text-center">
            Already registered? <button
              onClick={() => navigate("/login")}
              className="text-blue-500 hover:underline"
              type="button"
            >
              Login
            </button>
          </p>
        </form>
      </Card>
    </div>
  );
};