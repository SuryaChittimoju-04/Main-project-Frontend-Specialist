// src/components/dashboard/ScheduleCard.jsx
import React from 'react';
import { Clock } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
const formatDate = (dateString) => {
  const date = new Date(dateString);

  // Get day, month, year
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();

  // Get hours, minutes, and AM/PM format
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format

  // Determine suffix for day
  const suffix = (day) => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  return `${day}${suffix(day)} ${month} ${year} ${hours}:${minutes} ${ampm}`;
};
export const ScheduleCard = ({ fetchSlots, slots }) => {
  return (
    <Card className="bg-white overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-center">
          <div className="bg-purple-100 rounded-lg p-3">
            <Clock className="h-6 w-6 text-purple-600" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">Upcoming Appointments</h3>
            <p className="text-sm text-gray-500">View scheduled visits</p>
          </div>
        </div>
        <div className="mt-6">
          <Button className="w-full" onClick={fetchSlots}>View Schedule</Button>
        </div>
        <div className='flex flex-col gap-4'>
          {slots && slots.map((slot, index) => (
            <Card key={index}>
              <div className='flex w-full'>
                <div className='flex flex-col justify-center items-center w-[70%]'>
                  <p className='font-bold'>
                    {slot.name}
                  </p>
                  <p>
                    {slot.specialization}
                  </p>
                </div>
                <p className='w-[30%]'>{formatDate(slot.startTime)}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Card>
  )
};