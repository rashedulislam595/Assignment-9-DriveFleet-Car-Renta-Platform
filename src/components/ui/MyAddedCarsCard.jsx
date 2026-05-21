import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import CarUpdateModal from '../modal/CarUpdateModal';
import DeleteCarInfoModal from '../modal/DeleteCarInfoModal';

const MyAddedCarsCard = ({ car }) => {
    const { carName, imageUrl, carType, PickupLocation, DailyRentPrice, AvailabilityStatus } = car;
    return (
        <Card
            className="p-4 md:p-5 rounded-2xl border shadow-sm mb-5"
        >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">

                {/* Left Side */}
                <div className="flex items-center gap-4">
                    <div className="relative w-32 h-20 rounded-2xl overflow-hidden">
                        <Image
                            src={imageUrl}
                            alt={carName}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">{carName}</h2>

                        <p className="text-sm text-default-500 mt-1 block sm:flex items-center text-[#11111180]">
                            <span>{carType} • </span><span className='flex gap-0.5 items-center'><IoLocationOutline /> {PickupLocation} •</span> <span>${DailyRentPrice}</span>
                        </p>

                        <p className="text-green-600 font-semibold text-sm mt-2">
                            {AvailabilityStatus}
                        </p>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-3">
                    <CarUpdateModal car={car} />

                    <DeleteCarInfoModal car={car} />
                </div>
            </div>
        </Card>
    );
};

export default MyAddedCarsCard;