import BookingCard from '@/components/ui/BookingCard';
import EmptyBookingCard from '@/components/ui/EmptyBookingCard';
import { auth } from '@/lib/auth';
import { getUserBookings } from '@/lib/data';
import { headers } from 'next/headers';
import React from 'react';

const MyBookingsPage =async () => {
     const session = await auth.api.getSession({
        headers: await headers() 
    })
    const {token} = await auth.api.getToken({
        headers: await headers()
    })
    const user = session?.user;
    const bookingsCars = await getUserBookings(user?.id,token)

    return (
        <div className='w-11/12 mx-auto py-10'>
            <div className='text-center mb-5'>
                <h2 className='text-4xl font-bold mb-2'>My Bookings</h2>
                <p className='text-[#11111190] max-w-2xl mx-auto'>Track and manage all your car reservations in one place. Stay updated with booking status, rental dates, payment details, and trip information effortlessly.</p>
            </div>

            <div>
                {
                    bookingsCars.length === 0?<EmptyBookingCard/>:
                    bookingsCars.map(car =><BookingCard key={car._id} car={car} />)
                }
            </div>
            
        </div>
    );
};

export default MyBookingsPage;