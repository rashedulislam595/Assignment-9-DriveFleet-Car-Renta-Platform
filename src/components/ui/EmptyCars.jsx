import { Car } from 'lucide-react';
import React from 'react';

const EmptyCars = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center py-20 px-4 w-11/12 mx-auto  col-span-full">
      
      {/* Icon */}
      <div className="bg-gray-100 p-6 rounded-full mb-4">
        <Car size={40} className="text-gray-500" />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-700">
        No Cars Available
      </h2>

      {/* Description */}
      <p className="text-gray-500 mt-2 max-w-md">
        It looks like there are no cars available right now. You can add a new car or try again later.
      </p>
    </div>
    );
};

export default EmptyCars;