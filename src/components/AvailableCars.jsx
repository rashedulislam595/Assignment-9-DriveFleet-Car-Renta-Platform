import { getAvailableCars } from '@/lib/data';
import Link from 'next/link';
import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import AvailableCarsCard from '@/components/ui/AvailableCarsCard';


const AvailableCars = async () => {

    const cars = await getAvailableCars()
    return (
        <div className='w-11/12 mx-auto my-20'>
            <div className=''>
                <h2 className='text-4xl font-bold mb-1.5'>Available Cars</h2>
                <div className='sm:flex gap-2 justify-between items-center'>
                    <p className='text-[#11111190]' >Precision-maintained fleet ready for your departure</p>
                    <Link href={'/explore-cars'} className='text-blue-700 hover:underline font-bold flex justify-end items-center  group' >View All Cars <BiRightArrowAlt className='text-xl group-hover:translate-x-1 duration-700' /></Link>
                </div>

            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 my-7'>
                {cars.map(car=><AvailableCarsCard key={car._id} car={car} />)}
            </div>
        </div>
    );
};

export default AvailableCars;