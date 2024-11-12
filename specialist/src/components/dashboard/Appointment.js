// src/components/dashboard/AppointmentCard.jsx
import React from 'react';

import Card from '../ui/Card';
import { Calendar } from 'lucide-react';
import Button from '../ui/Button';

// const formatDate = (dateString) => {
//   const date = new Date(dateString);

//   // Get day, month, year
//   const day = date.getDate();
//   const month = date.toLocaleString('default', { month: 'short' });
//   const year = date.getFullYear();

//   // Get hours, minutes, and AM/PM format
//   let hours = date.getHours();
//   const minutes = date.getMinutes().toString().padStart(2, '0');
//   const ampm = hours >= 12 ? 'PM' : 'AM';
//   hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format

//   // Determine suffix for day
//   const suffix = (day) => {
//     if (day > 3 && day < 21) return 'th';
//     switch (day % 10) {
//       case 1: return 'st';
//       case 2: return 'nd';
//       case 3: return 'rd';
//       default: return 'th';
//     }
//   };

//   return `${day}${suffix(day)} ${month} ${year} ${hours}:${minutes} ${ampm}`;
// };
export const AppointmentCard = ({ availableSlots, onBook }) => {
  return (
    <Card className="bg-white overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-center">
          <div className="bg-green-100 rounded-lg p-3">
            <Calendar className="h-6 w-6 text-green-600" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">Book Appointment</h3>
            <p className="text-sm text-gray-500">Schedule your next visit</p>
          </div>
        </div>
        <div className="mt-6 gap-4 flex flex-col">
        <Button className="w-full" onClick={onBook}>Book Slot</Button>
          {/* {availableSlots && availableSlots.map((slot, index) => (
            <Card key={index}>
              <div className='flex flex-col justify-center items-center'>
                <p>StartTime: {formatDate(slot.startTime)}</p>
                <p>EndTime: {formatDate(slot.endTime)}</p>
                <Button onClick={onBook}>Book</Button>
              </div>
            </Card>
          ))} */}
        </div>
      </div>
    </Card>
  )
};