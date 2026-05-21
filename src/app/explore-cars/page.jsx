import AllCarsCard from '@/components/ui/AllCarsCard';
import { getAllCars } from '@/lib/data';
import React from 'react';

const ExploreAllCarsPage = async () => {
    const allCars = await getAllCars()

    return (
        <div className='bg-gray-200'>
            <div className='w-11/12 mx-auto py-10 md:py-14'>
                <div className='text-center'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-2'>Explore Fleet</h2>
                    <p className='text-[#11111180]'>Experience a range of expertly designed vehicles built for performance, <br className='hidden md:block' />comfort, and modern mobility.</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 my-10'>
                    {
                        allCars.map(car => <AllCarsCard key={car._id} car={car} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default ExploreAllCarsPage;