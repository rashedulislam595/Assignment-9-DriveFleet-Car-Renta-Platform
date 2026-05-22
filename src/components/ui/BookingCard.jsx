import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import DeleteBooking from '../modal/DeleteBooking';


const BookingCard = ({ car }) => {
    const {carId, carImage, seatCapacity, totalCost, carName, driverNeeded, PickupLocation, yourDay, bookingDate} = car;
    return (
        <div className="flex justify-center p-6">
            <Card className="w-full rounded-3xl shadow-md border border-gray-200 overflow-hidden">
                <div className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-[340px_1fr]">

                        {/* Car Image */}
                        <div className="relative ">
                            <Image
                                src={carImage}
                                alt={carName}
                                width={200}
                                height={200}
                                className="object-cover rounded-xl w-full h-full"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-4 flex flex-col justify-between">

                            {/* Top */}
                            <div>
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="text-xs font-semibold tracking-wider text-cyan-600 uppercase">
                                            driver-Needed: <span className='font-extrabold uppercase'>{driverNeeded}</span>
                                        </p>

                                        <h2 className="text-3xl font-bold text-gray-900 mt-2">
                                            {carName}
                                        </h2>
                                    </div>

                                    <button className='text-[#46875f] bg-[#d9f7e3] py-0.5 text-sm px-4 rounded-full font-bold'>Capacity : {seatCapacity}</button>
                                </div>

                                {/* Info Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">

                                    <div>
                                        <p className="text-xs font-semibold text-gray-400 uppercase">
                                            Booking Date
                                        </p>
                                        <h4 className="text-lg font-bold text-gray-800 mt-1">
                                            {bookingDate}
                                        </h4>
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold text-gray-400 uppercase">
                                            Duration
                                        </p>
                                        <h4 className="text-lg font-bold text-gray-800 mt-1">
                                            {yourDay ? yourDay : 1} Days
                                        </h4>
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold text-gray-400 uppercase">
                                            Location
                                        </p>
                                        <h4 className="text-lg font-bold text-gray-800 mt-1">
                                            {PickupLocation}
                                        </h4>
                                    </div>

                                    <div>
                                        <p className="text-xs font-semibold text-gray-400 uppercase">
                                            Total Price
                                        </p>
                                        <h4 className="text-2xl font-bold text-cyan-500 mt-1">
                                            ${totalCost}
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex items-center justify-end gap-4 mt-12">
                                <Link href={`/explore-cars/${carId}`}>
                                    <Button className="rounded-md text-blue-600 border border-blue-500 hover:bg-blue-600 hover:text-white" variant='outline'>View Details</Button>
                                </Link>

                                <DeleteBooking car={car} />
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default BookingCard;