import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div className='grid md:grid-cols-2 justify-between items-center gap-10 py-20 w-11/12 mx-auto '>
            <div className='order-2 md:order-1'>
                <h2 className='text-3xl md:text-5xl font-extrabold mb-3'>Premium Car Rentals <br className='hidden md:inline' /> for Your Next Journey</h2>
                <p className='text-[#11111180] mb-2'>Experience precision engineering and unparalleled reliability. Whether for business or leisure, DriveFleet provides the perfect vehicle for every destination.</p>
                <Link href={'/explore-cars'}>
                    <Button variant='primary' className='rounded-md' >Explore Cars</Button>
                </Link>
            </div>
            <div className='order-1 md:order-2'>
                <Image src={'https://lh3.googleusercontent.com/aida-public/AB6AXuAtjZlCYEbW4zPVWY8bMn0jL5CiLWwqw4uEh4uj-vuKQqnkXPCh56F4l4HBsrsfxexq8O2WpvKK6La0o74aCkcAyEF95kHJR_N2EOhk_0J0M0FSq7uQoBhvNxG5tuOd9QaTG4DuSQZHJIA09MCAwMTTU2k4WmNf04yXgHaNYuus6Ly_gTlsFKybKFlf8jYTI8P8q6uasEsVPXcO06wFapUmKCYof42uFacx1jS5rHcaas5RO3B7JAbEGcLTd3aDDsQ_cFp9u7I-V-w'} alt='banner image' width={300} height={300} className='w-full rounded-2xl' />
            </div>
        </div>
    );
};

export default Banner;