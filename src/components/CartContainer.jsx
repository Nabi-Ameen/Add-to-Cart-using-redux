import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../store/featurs/cartSlice'
import SingleCart from './SingleCart'

const CartContainer = () => {
    const { cartItems, amount, total } = useSelector((store) => store.cart)
    const dispatch = useDispatch();
    
    if (amount < 1) {
        return (
            <div className='pt-10 text-center'>
                <h2 className='text-lg font-semibold'>Your Bag is empty</h2>
            </div>
        )
    }
    return (
        <section className='px-6 lg:w-8/12 mx-auto'>
            <header className='text-center text-lg font-bold py-4 tracking-widest'>YOUR BAG</header>
            <div className='space-y-2'>
                {
                    cartItems.map((item) => {
                        return <SingleCart key={item.id} {...item} />
                    })
                }
            </div>
            <footer className='py-4'>
                <hr />
                <div className='flex justify-between pt-3'>
                    <p className='text-xl font-semibold'>Total</p>
                    <p className='text-xl font-semibold'>${total.toFixed(2)}</p>
                </div>

                <div className='text-center pt-8'>
                    <button className='px-6 py-2 border-[1px] transition-all rounded-md hover:bg-red-500 hover:text-white font-semibold border-red-500 tracking-widest uppercase' onClick={() => dispatch(clearCart())}>clear cart</button>
                   
                </div>
                    
            </footer>
        </section>
    )
}

export default CartContainer