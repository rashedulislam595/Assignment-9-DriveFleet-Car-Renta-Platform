import React from 'react';
import { MdDirectionsCarFilled, MdSupportAgent } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';

const ChooseDriveFleet = () => {
    return (
        <div className='bg-gray-200'>
            <div className='w-11/12 mx-auto py-20'>
                <div className="text-center mb-10">
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">Why Choose DriveFleet?</h3>
                    <p className="text-[#11111180] ">We redefine the rental experience with a focus on engineering excellence and <br className='hidden md:inline' /> client satisfaction.</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {/* card 1 */}
                    <div className='p-8 bg-white rounded-xl shadow-md text-center'>
                        <div className='flex justify-center bg-gray-200 w-14 p-4 rounded-full mx-auto mb-3'>
                            <SlCalender className='text-2xl font-bold' />
                        </div>
                        <h2 className='text-2xl font-bold mb-1.5'>Easy Booking</h2>
                        <p className='text-[#11111180]'>Reserve your premium vehicle effortlessly with our seamless, mobile-first booking experience designed for speed, convenience, and reliability.</p>
                    </div>
                    {/* card 2 */}
                    <div className='p-8 bg-white rounded-xl shadow-md text-center'>
                        <div className='flex justify-center bg-gray-200 w-14 p-4 rounded-full mx-auto mb-3'>
                            <MdDirectionsCarFilled className='text-2xl font-bold' />
                        </div>
                        <h2 className='text-2xl font-bold mb-1.5'>Wide Selection</h2>
                        <p className='text-[#11111180]'>From premium electric sedans to luxury SUVs, discover the perfect vehicle tailored to your lifestyle, comfort, and driving needs.</p>
                    </div>
                    {/* card 3 */}
                    <div className='p-8 bg-white rounded-xl shadow-md text-center'>
                        <div className='flex justify-center bg-gray-200 w-14 p-4 rounded-full mx-auto mb-3'>
                            <MdSupportAgent className='text-2xl font-bold' />
                        </div>
                        <h2 className='text-2xl font-bold mb-1.5'>24/7 Support</h2>
                        <p className='text-[#11111180]'>Our dedicated concierge team is available around the clock to ensure a seamless, comfortable, and exceptional travel experience.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseDriveFleet;