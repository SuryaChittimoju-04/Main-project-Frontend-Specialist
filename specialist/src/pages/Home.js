/* eslint-disable */
import React, { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import { HealthRecordCard } from '../components/dashboard/HealthRecordCard';
import { ScheduleCard } from '../components/dashboard/ScheduleCard';
import { RecentActivity } from '../components/dashboard/RecentActivity';
import { AppointmentCard } from '../components/dashboard/Appointment';
import BookingPopup from '../components/dashboard/BookingPopup';
import { useDispatch, useSelector } from 'react-redux';
import Slots from '../store/slots/actions';
import bookings from '../store/bookings/actions';

const Home = ({ onLogout }) => {
  const dispatch = useDispatch();
  const slotsData = useSelector((state) => state.slots);
  const bookingData = useSelector((state) => state.bookings.specializations?.data); // Use booking state for specializations and doctors
  const [isBookingInProgress, setIsBookingInProgress] = useState(false);
  const userName = window.localStorage.getItem("userName");

  const [history,setHistory]= useState([]);

  // Fetch initial slot and specialization data
  useEffect(() => {
    dispatch(Slots.fetchSlotsRequest());
    dispatch(Slots.fetchHistoryRequest());
    dispatch(bookings.fetchSpecializations()); // Fetch specializations on component mount
  }, [dispatch]);

  // Load available slots once data is fetched
  useEffect(() => {
    if (slotsData?.availableSlots?.statusCode === 200) {
      setAvailableSlots(slotsData.availableSlots.data);
    }
    if(slotsData?.history?.data?.statusCode === 200) {
      setHistory(slotsData?.history?.data?.data);
    }
  }, [slotsData]);

  const handleBook = () => setIsBookingInProgress(true);
  const closeBookingPopup = () => setIsBookingInProgress(false);

  const submitBooking = (bookingData) => {
    console.log("Booking data:", bookingData);
    dispatch(bookings.bookSlot(bookingData));
    setIsBookingInProgress(false);
  };
  const fetchSlots = () => {
    dispatch(Slots.fetchSlotsRequest());
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <Header onLogout={onLogout} />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          <h2 className="text-2xl font-semibold text-gray-900">Welcome back, {userName}</h2>
          <p className="mt-1 text-sm text-gray-600">
            Manage your appointments and health records
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0">
          <HealthRecordCard />
          <AppointmentCard onBook={handleBook} />
          <ScheduleCard slots={slotsData.upComingSlotsData?.data} fetchSlots={fetchSlots}/>
        </div>

        <RecentActivity history={history}/>
      </main>
      
      {isBookingInProgress && (
        <BookingPopup
          onClose={closeBookingPopup}
          onSubmit={submitBooking}
          specializations={bookingData.data}
          fetchDoctors={(specialization) => dispatch(bookings.fetchDoctors(specialization))}
          fetchSlots={(doctorId) => dispatch(Slots.fetchAvailableSlotsRequest(doctorId))}
        />
      )}
    </div>
  );
};

export default Home;
