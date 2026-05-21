import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { RiFacebookBoxFill, RiTwitterXFill } from 'react-icons/ri';
import logo from '../../public/assets/logo.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-cyan-950 text-neutral-content pt-28 pb-7">
                <div className='w-11/12 md:w-10/12 mx-auto '>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-12 mb-20'>
                        <div className=''>
                            <div className='flex items-center gap-2 text-white'>
                                <Image src={logo} alt='logo' width={50} height={50}  />
                                <h2 className='text-3xl font-bold '>DriveFleet</h2>
                            </div>
                            <p className='text-[#FFFFFF80]'>Smart fleet management platform for efficient operations, real-time tracking, and seamless transportation control.</p>
                        </div>
                        {/* Quick Links*/}
                        <div className=''>
                            <h2 className='text-xl text-[#FFFFFF] mb-6 font-medium'>Quick Links</h2>
                            <ul className='text-[#FFFFFF80] space-y-4'>
                                <li><Link href="/explore-cars">Explore Cars</Link></li>
                                <li><Link href="/add-car">Add Car</Link></li>
                                <li><Link href="/my-booking">My-Booking </Link></li>
                            </ul>
                        </div>
                        {/* Support */}
                        <div>
                            <h2 className='text-xl text-[#FFFFFF] mb-6 font-medium'>Support</h2>
                            <ul className='text-[#FFFFFF80] space-y-4'>
                                <li><Link href="/">Contact Us</Link></li>
                                <li><Link href="/">FAQ </Link></li>
                                <li><Link href="/">Help Center </Link></li>
                            </ul>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h2 className='text-xl text-[#FFFFFF] mb-6 font-medium'>Social Links</h2>
                            <ul className='text-[#FFFFFF80] space-y-4 flex gap-4'>
                                <li className='border w-8 h-8 bg-[#FFFFFF] flex justify-center items-center rounded-full'><a href=""> <AiFillInstagram className='text-black w-5 h-5' /> </a></li>
                                <li className='border w-8 h-8 bg-[#FFFFFF] flex justify-center items-center rounded-full'><a href=""> <RiFacebookBoxFill className='text-black w-5 h-5' /> </a></li>
                                <li className='border w-8 h-8 bg-[#FFFFFF] flex justify-center items-center rounded-full'><a href=""> <RiTwitterXFill className='text-black w-5 h-5' /> </a></li>


                            </ul>
                        </div>
                    </div>

                    <div className='pt-8 border-t border-t-[#FFFFFF20] flex justify-between w-full gap-10 sm:gap-0 '>
                        <p className='text-[#FFFFFF70]'>© 2026 DriveFleet. All rights reserved.</p>
                        <ul className='text-[#FFFFFF70] flex gap-5'>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Terms of Service</a></li>
                            <li><a href="">Cookies</a></li>
                        </ul>
                    </div>

                </div>
            </footer>
        </div>
    );
};

export default Footer;