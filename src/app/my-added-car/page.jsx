import MyAddedCarEmpty from '@/components/ui/MyAddedCarEmpty';
import MyAddedCarsCard from '@/components/ui/MyAddedCarsCard';
import { auth } from '@/lib/auth';
import { getUserCarData } from '@/lib/data';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';

const MyAddedCar = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;

    const {token} = await auth.api.getToken({
        headers: await headers()
    })

    const userCars = await getUserCarData(user?.id,token)
    console.log(userCars)

    return (
        <div className='w-11/12 mx-auto py-20'>
            <h2 className='text-4xl font-bold text-center'>My Added Car</h2>
            <Link href={'/add-car'} className='text-green-600 font-bold flex justify-end' >Add Car</Link>

            <div className='my-5'>
                {
                    userCars.length === 0 ? <MyAddedCarEmpty/>:
                    userCars.map(car => <MyAddedCarsCard key={car._id} car={car} />)
                }
            </div>
        </div>
    );
};

export default MyAddedCar;