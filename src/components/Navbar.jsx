'use client'
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import logo from '../../public/assets/logo.png'

const Navbar = () => {
    const isActive = usePathname()

    return (
        <div className='bg-white shadow-sm sticky top-0 z-10'>
            <div className='flex justify-between items-center w-11/12 mx-auto p-2'>
               <div className='flex items-center gap-2'>
                    <Image src={logo} alt='logo' width={50} height={50} />
                    <h2 className='text-3xl font-bold'>DriveFleet</h2>
                </div>

                <ul className='flex gap-5 items-center'>
                    <li><Link href={'/'} className={`${isActive === "/" ? "border-b-2 border-b-green-500 text-green-600" : ""}`}>Home</Link></li>
                    <li><Link href={'/explore-cars'} className={`${isActive === "/explore-cars" ? "border-b-2 border-b-green-500 text-green-600" : ""}`}>Explore Cars</Link></li>
                    <li><Link href={'/add-car'} className={`${isActive === "/add-car" ? "border-b-2 border-b-green-500 text-green-600" : ""}`}> Add Car</Link></li>
                    <li><Link href={'/my-bookings'} className={`${isActive === "/my-bookings" ? "border-b-2 border-b-green-500 text-green-600" : ""}`}>My Bookings</Link></li>
                </ul>

                <ul className='flex gap-3 items-center'>
                    <li>
                        <Button variant='primary' className="rounded-md">Login</Button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;