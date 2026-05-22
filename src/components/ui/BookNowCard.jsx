import { Button, Card, DateField, Label, Separator } from '@heroui/react';
import { MapPin } from 'lucide-react';
import React, { useState } from 'react';
import BookNowModal from '../modal/BookNowModal';
import { FaBookmark } from 'react-icons/fa6';

const BookNowCard = ({ car }) => {
    const [pickupDate, setPickupDate] = useState(null)
    const [returnDate, setReturnDate] = useState(null)

    const { PickupLocation, DailyRentPrice, carName, booking_count } = car;

    const calculateDay = () => {

        const pickup = new Date(
            pickupDate?.year,
            pickupDate?.month - 1,
            pickupDate?.day
        )
        const dropOff = new Date(
            returnDate?.year,
            returnDate?.month - 1,
            returnDate?.day
        )

        const diffTime = dropOff - pickup
        const day = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return day
    }
    const yourDay = calculateDay()

    // calculate amount 
    const yourDayTotalPrice = yourDay ? DailyRentPrice * yourDay : DailyRentPrice;
    const serviceFee = 45;
    const total = parseInt(yourDayTotalPrice) + parseInt(serviceFee);

    return (
        <div className='sticky top-24'>
            <Card className="shadow-md border border-gray-200 p-6">

                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold">
                            {carName}
                        </h2>

                        <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                            <MapPin />
                            <span>{PickupLocation}</span>
                        </div>
                    </div>

                    <div className="text-right">
                        <h3 className="text-3xl font-bold ">
                            ${DailyRentPrice}
                        </h3>

                        <p className="text-xs text-gray-500">
                            / per day
                        </p>
                    </div>
                </div>
                <p className='text-[#11111180]'>A spacious SUV with excellent luggage room and smooth highway manners</p>

                <p className='flex gap-0.5 items-center my-2 text-[#11111180]'><FaBookmark />Booked By {booking_count>0?booking_count:0} users</p>

                {/* DATES */}
                <div className="space-y-4">
                    <DateField className="w-[256px]" name="date" onChange={setPickupDate} >
                        <Label>Pick-up Date</Label>
                        <DateField.Group>
                            <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                        </DateField.Group>
                    </DateField>

                    <DateField className="w-[256px]" name="date" onChange={setReturnDate} >
                        <Label>Return Date</Label>
                        <DateField.Group>
                            <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                        </DateField.Group>
                    </DateField>
                </div>

                {/* PRICING */}
                <div className="space-y-3 mt-6 text-sm">
                    <div className="flex justify-between">
                        <span className="text-gray-500">
                            ${DailyRentPrice} × {yourDay ? yourDay : 1} days
                        </span>

                        <span className="font-medium">
                            ${yourDayTotalPrice}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-default-500">
                            Service Fee
                        </span>

                        <span className="font-medium">
                            ${serviceFee}
                        </span>
                    </div>

                    <Separator />

                    <div className="flex justify-between items-center pt-1">
                        <span className="text-lg font-bold">
                            Total
                        </span>

                        <span className="text-2xl font-bold ">
                            ${total}
                        </span>
                    </div>
                </div>
                {/* bookNow modal */}
                <BookNowModal car={car} pickupDate={pickupDate} returnDate={returnDate} total={total} yourDay={yourDay} />

                <p className="text-xs text-center text-gray-500 mt-4 leading-5">
                    You won’t be charged yet. Free cancellation up to
                    24 hours before pickup.
                </p>
            </Card>
        </div>
    );
};

export default BookNowCard;