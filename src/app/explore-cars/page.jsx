'use client'
import AllCarsCard from '@/components/ui/AllCarsCard';
import EmptyCars from '@/components/ui/EmptyCars';
import { getAllCars } from '@/lib/data';
import { Spinner } from '@heroui/react';
import React, { useEffect, useState } from 'react';

const ExploreAllCarsPage = () => {
    const [search, setSearch] = useState("");
    const [type, setType] = useState("");
    const [allCars,setAllCars] = useState([])
    const [loading, setLoading] = useState(true)
    // console.log(search,setType)
    useEffect(() => {
        const loadCars = async () => {
            const data = await getAllCars(search,type);
            setAllCars(data);
            setLoading(false)
        };
        loadCars()

    }, [search, type]);

    return (
        <div className='bg-gray-200'>
            <div className='w-11/12 mx-auto py-10 md:py-14'>
                <div className='text-center'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-2'>Explore Fleet</h2>
                    <p className='text-[#11111180]'>Experience a range of expertly designed vehicles built for performance, <br className='hidden md:block' />comfort, and modern mobility.</p>
                </div>
                {/* search and filter */}
                <div className='flex flex-col lg:flex-row justify-between items-center gap-4 mb-10 md:w-8/12 mx-auto my-5 bg-white py-2 px-5 rounded-xl'>
                    {/* Search Field */}
                    <div className="w-full lg:w-[70%]">
                        <input
                            type="text"
                            placeholder="Search by car name..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full px-4 md:px-5 py-3 rounded-xl border border-gray-300 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-200"
                        />
                    </div>
                    {/* Filter Field */}
                    <div className="w-full lg:w-[30%]">
                        <select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            className="w-full px-4 md:px-5 py-3 rounded-xl border border-gray-300 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-200"
                        >
                            <option value="">All Types</option>
                            <option value="Suv">Suv</option>
                            <option value="Sedan">Sedan</option>
                            <option value="Luxury">Luxury</option>
                            <option value="Hatchback">Hatchback</option>
                            <option value="Electric">Electric</option>
                            <option value="Convertible">Convertible</option>
                        </select>
                    </div>
                </div>

                {/* all cars section */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 my-10'>
                    { loading?
                       <div className='flex justify-center items-center sm:py-44 py-20 col-span-full '>
                        <Spinner/>
                    </div> :
                     allCars.length === 0?<EmptyCars/>:
                     allCars.map(car => <AllCarsCard key={car._id} car={car} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default ExploreAllCarsPage;