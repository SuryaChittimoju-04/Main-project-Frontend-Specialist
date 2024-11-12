// src/components/BookingPopup.jsx
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const BookingPopup = ({ onClose, onSubmit, specializations, fetchDoctors, fetchSlots }) => {
    const [selectedSpecialization, setSelectedSpecialization] = useState('');
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [selectedSlot, setSelectedSlot] = useState('');
    const doctorsList = useSelector((state)=> state.bookings.doctors?.data);
    const [doctors, setDoctors] = useState([]);
    const slots = useSelector((state) => state.slots.availableSlots?.data?.data || []); // Select slots from Redux store

    // Fetch doctors when a specialization is selected
    useEffect(() => {
        if (selectedSpecialization) {
            fetchDoctors(selectedSpecialization);
        }
    }, [selectedSpecialization, fetchDoctors]);

    // Update doctors state when new data is received
    useEffect(() => {
        if (doctorsList) {
            if(doctorsList.statusCode === 200){
                setDoctors(doctorsList.data);
            }
        }
    }, [doctors, doctorsList]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ selectedDoctor, selectedSlot });
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold mb-4">Book an Appointment</h2>
                <form onSubmit={handleSubmit}>
                    {/* Specialization Dropdown */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Specialization</label>
                        <select
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            value={selectedSpecialization}
                            onChange={(e) => setSelectedSpecialization(e.target.value)}
                            required
                        >
                            <option value="">Select Specialization</option>
                            {specializations.map((spec) => (
                                <option key={spec.specialization} value={spec.id}>
                                    {spec.specialization}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Doctor Dropdown */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Doctor</label>
                        <select
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            value={selectedDoctor}
                            onChange={(e) => {
                                setSelectedDoctor(e.target.value);
                                fetchSlots(e.target.value); // Trigger fetchSlots action when a doctor is selected
                            }}
                            required
                        >
                            <option value="">Select Doctor</option>
                            {doctors.map((doctor) => (
                                <option key={doctor.id} value={doctor.id}>
                                    {doctor.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Slots List */}
                    <div className="mb-4 max-h-20 overflow-y-auto border border-gray-300 rounded p-2">
                        {slots.length > 0 ? (
                            slots.map((slot) => (
                                <div key={slot.id} className="p-2 border-b border-gray-200" onClick={()=>setSelectedSlot(slot.id)}>
                                    <p>Start: {new Date(slot.startTime).toLocaleString()}</p>
                                    <p>End: {new Date(slot.endTime).toLocaleString()}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No available slots</p>
                        )}
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end space-x-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Book
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingPopup;
