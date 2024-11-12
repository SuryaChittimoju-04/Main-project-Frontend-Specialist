// src/components/common/BookingDialog.jsx
import React, { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';

export const BookingDialog = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  return (
    <div>
    {/* // <Dialog>
    //   <DialogTrigger asChild> */}
        <Button className="w-full">Book Slot</Button>
      {/* // </DialogTrigger>
      // <DialogContent>
      //   <DialogHeader>
      //     <DialogTitle>Book Appointment</DialogTitle>
      //   </DialogHeader> */}
        <div className="space-y-4 mt-4">
          <Input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
          <Input
            type="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          />
          <Button className="w-full">Confirm Booking</Button>
        </div>
    {/* //   </DialogContent>
    // </Dialog> */}
    </div>
  );
};