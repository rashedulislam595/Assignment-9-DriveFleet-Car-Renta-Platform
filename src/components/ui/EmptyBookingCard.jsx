import { Button, Card } from '@heroui/react';
import { CalendarDays, CarFront, SearchX } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const EmptyBookingCard = () => {
    return (
        <div className="bg-[#f4f7fb] flex items-center justify-center p-6">
      <Card className="w-full max-w-2xl shadow-md border border-gray-200 rounded-3xl">
        <div className="py-16 px-8 flex flex-col items-center text-center">
          
          {/* Icon */}
          <div className="w-24 h-24 rounded-full bg-cyan-50 flex items-center justify-center mb-6">
            <CarFront className="w-12 h-12 text-cyan-500" />
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-900">
            No Booking Found
          </h2>

          {/* Description */}
          <p className="text-gray-500 mt-4 max-w-md leading-relaxed">
            You haven&apos;t booked any cars yet. Explore available vehicles
            and reserve your perfect ride in just a few clicks.
          </p>

          {/* Small Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-10">
            
            <div className="border border-gray-200 rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center">
                <SearchX className="text-cyan-600 w-6 h-6" />
              </div>

              <div className="text-left">
                <h4 className="font-semibold text-gray-800">
                  No Active Booking
                </h4>
                <p className="text-sm text-gray-500">
                  Your booking list is currently empty
                </p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center">
                <CalendarDays className="text-cyan-600 w-6 h-6" />
              </div>

              <div className="text-left">
                <h4 className="font-semibold text-gray-800">
                  Quick Reservation
                </h4>
                <p className="text-sm text-gray-500">
                  Book your car anytime instantly
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <Link href={'/explore-cars'}>
          <Button
            size="lg"
            className="mt-10 bg-cyan-500 text-white font-semibold px-8"
          >
            Explore Cars
          </Button>
          </Link>
        </div>
      </Card>
    </div>
    );
};

export default EmptyBookingCard;