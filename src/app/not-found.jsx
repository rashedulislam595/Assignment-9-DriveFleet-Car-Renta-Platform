import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { ImFileEmpty } from 'react-icons/im';

const NotFoundPage = () => {
    return (
        <div className='h-[50vh] my-20 flex justify-center items-center flex-col  gap-5 md:w-3xl rounded-2xl bg-gray-200 mx-5 md:mx-auto'>
            <ImFileEmpty className='text-3xl text-gray-600' />
            <h2 className='text-4xl font-bold text-gray-500'>Page is Not found</h2>
            <Link href={"/"}>
                <Button variant='outline' className='rounded-md border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white '>Back to Home</Button>
            </Link>
        </div>
    );
}

export default NotFoundPage;