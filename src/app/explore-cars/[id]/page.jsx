import CarDetailsCard from '@/components/ui/CarDetailsCard';
import { getCarById } from '@/lib/data';
import React from 'react';
import { AiOutlineConsoleSql } from 'react-icons/ai';

const CarDetailsPage = async({params}) => {
    const {id} = await params;
    const car = await getCarById(id)
    
    return (
        <div className='w-11/12 mx-auto my-5'>
            <CarDetailsCard car={car} />
        </div>
    );
};

export default CarDetailsPage;