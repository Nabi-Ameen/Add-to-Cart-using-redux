import React from 'react'
import { HiChevronUp, HiChevronDown } from 'react-icons/hi';
import { removeItem, increase, decrease } from '../store/featurs/cartSlice';
import { useDispatch } from 'react-redux';

const SingleCart = ({id, title, price, img, amount }) => {
    const dispatch = useDispatch()
    return (
        <div className='flex justify-between'>
            <div className='flex items-center'>
                <img src={img} alt={title} className="h-28 md:h-36" />
                <div className='space-y-2'>
                    <p className='text-lg font-semibold text-gray-600'>{title}</p>
                    <p className='text-gray-600 font-semibold'>{price}</p>
                    <button className='text-purple-800 font-semibold tracking-wider' onClick={()=>dispatch(removeItem(id))}>Remove</button>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <i className='text-2xl cursor-pointer transition-all hover:border-purple-800 text-purple-800' onClick={() => dispatch(increase({ id }))}><HiChevronUp /></i>
                <p className='text-lg '>{amount}</p>
                <i className='text-2xl cursor-pointer transition-all hover:border-purple-800 text-purple-800' onClick={()=>dispatch(decrease({id}))}><HiChevronDown /></i>
            </div>
        </div>
    )
}

export default SingleCart