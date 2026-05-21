import { Spinner } from '@heroui/react';
import React from 'react';

const loading = () => {
    return (
        <div className='h-screen  border flex justify-center items-center'>
            <Spinner/>
        </div>
    );
};

export default loading;