import CarDetailsCard from '@/components/ui/CarDetailsCard';
import { auth } from '@/lib/auth';
import { getCarById } from '@/lib/data';
import { headers } from 'next/headers';
import React from 'react';


const CarDetailsPage = async({params}) => {
    const {token} = await auth.api.getToken({
        headers: await headers()
    })
    const {id} = await params;
    const car = await getCarById(id,token)
    
    return (
        <div className='w-11/12 mx-auto my-5'>
            <CarDetailsCard car={car} />
        </div>
    );
};

export default CarDetailsPage;