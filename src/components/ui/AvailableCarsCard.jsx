import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { MdAirlineSeatReclineExtra, MdOutlineSettingsInputComponent } from 'react-icons/md';

const AvailableCarsCard = ({ car }) => {
    const { _id, carName, DailyRentPrice, carType, seatCapacity, imageUrl, AvailabilityStatus, PickupLocation, description } = car;

    const statusStyle = {
        Available: "bg-green-100 text-green-700 border border-green-300",
        Unavailable: "bg-red-100 text-red-700 border border-red-300",
    };
    
    const typeStyle = {
        Suv: "bg-green-100 text-green-700",
        Luxury: "bg-purple-100 text-purple-700",
        Sedan: "bg-blue-100 text-blue-700",
        Hatchback: "bg-yellow-100 text-yellow-700",
        Electric: "bg-emerald-100 text-emerald-700",
        Convertible: "bg-pink-100 text-pink-700",
    }
    const style = typeStyle[carType]
    const availabilityStyle = statusStyle[AvailabilityStatus]

    return (
        <Card className="w-full items-stretch shadow-md group overflow-hidden rounded-xl  p-0 hover:shadow-xl border border-gray-300">
            <div className="w-full shrink-0 overflow-hidden rounded-t-xl relative">
                <Image src={imageUrl} alt={carName} width={200} height={200} className='w-full h-52 rounded-t-xl group-hover:scale-110 duration-700' />
                <div className='absolute top-3 left-3'>
                    <button className={`${style} py-0.5 text-sm px-4 rounded-full font-bold`}>{carType}</button>
                </div>
            </div>
            <div className="flex flex-1 flex-col gap-3 p-4">
                <Card.Header className="gap-1">
                    <div className='flex justify-between items-center'>
                        <Card.Title className=" text-2xl mb-2">{carName}</Card.Title>
                        <button className={`${availabilityStyle} py-0.5 text-sm px-4 rounded-md font-bold`}>{AvailabilityStatus}</button>
                    </div>
                    <Card.Description className='line-clamp-2' >
                        {description}
                    </Card.Description>
                    <div className='grid grid-cols-3 justify-between items-center my-5'>
                        {/* seats */}
                        <div className='text-center text-[#11111190]'>
                            <MdAirlineSeatReclineExtra className='text-xl mx-auto' />
                            <p>{seatCapacity}</p>
                        </div>
                        {/* pickup location */}
                        <div className=' text-[#11111190] text-center'>
                            <IoLocationOutline className='mx-auto text-xl' />
                            <p>{PickupLocation.split(' ')[0]}</p>
                        </div>
                        {/* Automatic */}
                        <div className=' text-[#11111190] text-center'>
                            <MdOutlineSettingsInputComponent className='mx-auto text-xl' />
                            <p>Automatic</p>
                        </div>

                    </div>
                </Card.Header>
                <Card.Footer className="mt-auto flex w-full gap-3 items-center justify-between">
                    <div className="flex flex-col">
                        <p className='text-3xl font-bold '>${DailyRentPrice}<span className='text-lg font-normal text-[#11111170]'>/day</span></p>
                    </div>
                    <Link href={`/explore-cars/${_id}`}>
                        <Button className='text-blue-600 bg-white font-bold'  >View Details</Button>
                    </Link>
                </Card.Footer>
            </div>
        </Card>
    );
};

export default AvailableCarsCard;