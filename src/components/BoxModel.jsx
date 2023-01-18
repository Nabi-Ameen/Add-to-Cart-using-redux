import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCart } from '../store/featurs/cartSlice';
import { modelClose } from '../store/featurs/modelSlice';

const BoxModel = () => {
    const dispatch = useDispatch();

    return (
        <aside className='fixed top-0 left-0 right-0 z-50 h-screen flex justify-center items-center bg-black/50'>

            <div className='bg-white p-6 rounded-md '>
                <p>Are you sure want to delete cartItem?</p>
                <div className='flex justify-between pt-3'>
                    <button className='px-4 py-1 border-[2px] border-purple-800 rounded-md hover:bg-purple-800 hover:text-white'
                        onClick={() => {
                            dispatch(clearCart())
                            dispatch(modelClose())
                        }}
                    >Confirm</button>
                    <button className='px-4 py-1 border-[2px] border-purple-800 rounded-md hover:bg-purple-800 hover:text-white'
                        onClick={() => dispatch(modelClose())}>Cancel</button>
                </div>
            </div>

        </aside>
    )
}

export default BoxModel