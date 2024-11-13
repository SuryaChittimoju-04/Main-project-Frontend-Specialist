// src/components/auth/SignupForm.jsx
import React, { useEffect, useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { useNavigate } from 'react-router-dom';
import { User, Lock, Mail, Stethoscope, PhoneCall, Building } from 'lucide-react';
import bookings from '../../store/bookings/actions';
import { useDispatch, useSelector } from 'react-redux';

export const SignupForm = ({ onSignup, onNavigateLogin }) => {
  const dispatch = useDispatch();
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
  const [specialization, setSpecialization] = useState([]);
  const bookingData = useSelector((state) => state.bookings.specializations?.data);
  useEffect(() => {
    if (bookingData) {
      setSpecialization(bookingData.data);
    } else {
      dispatch(bookings.fetchSpecializations());
    }
  }, [dispatch, bookingData]);

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
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
              value={formData.specialization}
              onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
              required>
              <option value="">Specialization</option>
              {specialization.length>0 && specialization.map((spec) => (
                <option value={spec.id} key={spec.id}>{spec.specialization}</option>
              ))}
            </select>
            <Stethoscope className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          </div>
          <div className='relative'>
            <select className="w-full p-2 pl-10 border border-gray-300 rounded mt-1"
              value={formData.isAffiliated}
              onChange={(e) => setFormData({ ...formData, isAffiliated: e.target.value })}
              required>
              <option value="">Is Affiliated</option>
              {[{ value: true }, { value: false }].map((isAff) => (
                <option value={isAff.value} key={isAff.value}>{String(isAff.value)}</option>
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