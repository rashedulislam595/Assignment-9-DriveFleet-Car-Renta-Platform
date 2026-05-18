import Image from 'next/image';
import React from 'react';

const PopularDestinations = () => {
    return (
        <div className='w-11/12 mx-auto my-20'>
            <div className="text-center mb-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">Popular Destinations</h3>
                <p className="text-[#11111180] ">Explore our most sought-after destinations, carefully selected to deliver exceptional <br className='hidden md:inline' /> comfort, luxury, and unforgettable travel experiences.</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8'>
                {/* card 1 */}
                <div className=' group overflow-hidden rounded-md shadow-md relative'>
                    <Image src={'https://lh3.googleusercontent.com/aida-public/AB6AXuC3prWeR50U8u1VJWKd4Se5YvfqYwpaTO9CtGfhNZhSoJl6NcMP42G0cv9T9_cM2Cz1fT-ai_nPW5fD3q6u_32aYLk-sdM580t0GUKn0jRUdvy47BnecdJ6Uj7bqDAC-nNs8tv8lzxbiAQSj9dxerzrABX8GTrZtn6oEL-gld6lXSplOh9slMZqDncDZcduIczK_Rjvck6UX6iqzh9BgvFSAn67x3_nIwQKMex4MgcIJIRarhrw--m59vCFae_OmrjJ8V7gbOOIMNs'} alt='popular image-1' width={200} height={300} className='w-full h-full object-cover rounded-md group-hover:scale-105 duration-700'/>
                    <div className='absolute bottom-5 left-4'>
                        <p className='text-2xl font-bold text-white'>Coastal Drive</p>
                    </div>
                </div>
                {/* card 2 */}
                <div className=' group overflow-hidden rounded-md shadow-md relative'>
                    <Image src={'https://lh3.googleusercontent.com/aida-public/AB6AXuCw5haAVKW8x4GXkdyUpf_5YeuDbhR6BJPD6YajlrlcvFSTS8NCFRKS8fxKfy9iaiQ9Db3hE6_-hWbkz83r2XLNiIzalF_ZcNOwU3YEKiutQPYdrF6Q8W-ucLWl5nCiySSkFqKXLr6FD_1CVjaC1g3_4jH5ASr3jBBmr8ByG0CEJIAgCrCu_1WvX-64aO9y4PhoGDopzxXkWLvo8Dx6G2WwHXXoZpEdvzlW0Vj34ScbTQ8oV7_StZaHDtJdQPmCUQ_k2zc1ho2lXOc'} alt='popular image-1' width={200} height={300} className='w-full h-full object-cover rounded-md group-hover:scale-105  duration-700'/>
                    <div className='absolute bottom-5 left-4'>
                        <p className='text-2xl font-bold text-white'>Mountain Peaks</p>
                    </div>
                </div>
                {/* card 3 */}
                <div className=' group overflow-hidden rounded-md shadow-md relative'>
                    <Image src={'https://lh3.googleusercontent.com/aida-public/AB6AXuCEMp0jK8wpwDRhpvzK9PtOiwfPxBufD7U50v3v4hG2G9m7nOF1UyvVmfLb0b1kzJsWQZ4WCzXvshqSqnOO4NomO0Q0hQmyXcpJsn0SzSpEdSyDHo0Ec0TVnVt0xyx4U8tPdkrPN2wkg8CbYsfDp_0Z5yLdK44UKSqzpw3ChsNJGt6cPWxOFKLvG501fS_5Td7HExyqcPhFCkK7Mcmy7gZRplhSW7g9x4iSCgsFJsh4_6i-5aBgMe3_jMId7s70dMf-LJY54yXontY'} alt='popular image-1' width={200} height={300} className='w-full h-full object-cover rounded-md group-hover:scale-105  duration-700'/>
                    <div className='absolute bottom-5 left-4'>
                        <p className='text-2xl font-bold text-white'>City Lights</p>
                    </div>
                </div>
                {/* card 4 */}
                <div className=' group overflow-hidden rounded-md shadow-md relative'>
                    <Image src={'https://lh3.googleusercontent.com/aida-public/AB6AXuAgzUR50-PcZIzcb-awGt3hQ978dEe-Yj6v7htPEft404w5ttsUt_ILQjR7aHJYtYMDKwuhRCsMjDvzNyr9EAu0e0Tke7DIO9FymTO5m3y9_ggkgHLeV-E-vt93edP0WvCQWxMSOzqx6wA-jf3FuIZ2VVnkvzzKRnc5NLqagx43dtYJW0v4wl3y4TkwnC_wtuUNKuQSkw1_LyRjGBcBGgnOHJTRurmSGOaGRPmOA3JQ2XpH3cTw4ZvzZEmYgHZHrt-7be0D8WUZQK8'} alt='popular image-1' width={200} height={300} className='w-full h-full object-cover rounded-md group-hover:scale-105 duration-700'/>
                    <div className='absolute bottom-5 left-4'>
                        <p className='text-2xl font-bold text-white'>Euro Getaway</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularDestinations;