// src/components/dashboard/RecentActivity.jsx
import React from 'react';
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
export const RecentActivity = ({ history }) => {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
      <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
        <ul className="divide-y divide-gray-200">
          {history.map((activity, idx) => (
            <li key={idx} className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-blue-600 truncate">{activity.specialization}</p>
                <div className="ml-2 flex-shrink-0 flex">
                  <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    completed
                  </p>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-500">{formatDate(activity.endTime)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};