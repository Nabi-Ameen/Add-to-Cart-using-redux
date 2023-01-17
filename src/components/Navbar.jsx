import React from 'react'
import { FaShoppingBag } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className='bg-purple-800 px-6'>
            <div className='flex justify-between items-center lg:w-8/12 text-white mx-auto py-4'>
                <div className='md:text-2xl  lg:text-4xl font-bold '>
                    Redux Toolkit
                </div>
                <div className='relative'>
                    <i className='text-4xl'><FaShoppingBag/></i>
                    <div className='absolute -top-1 -right-2 w-6 h-6 rounded-full text-purple-900 bg-gray-300 flex items-center justify-center'>0</div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar