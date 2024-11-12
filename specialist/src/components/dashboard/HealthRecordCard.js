// src/components/dashboard/HealthRecordCard.jsx
import React from 'react';

import Card from '../ui/Card';
import Button from '../ui/Button';
import { User } from 'lucide-react';

export const HealthRecordCard = () => {
  return (
    <Card className="bg-white overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-center">
          <div className="bg-blue-100 rounded-lg p-3">
            <User className="h-6 w-6 text-blue-600" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">Health Records</h3>
            <p className="text-sm text-gray-500">View your medical history</p>
          </div>
        </div>
        <div className="mt-6">
          <Button className="w-full">Access Records</Button>
        </div>
      </div>
    </Card>
  )
};