import React from 'react'
import ItemList from './ItemList'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../slices/cartSlice';

function Cart() {
  const dispatch = useDispatch()
  const handleClearCart = () => {
    dispatch(clearCart())
  }

  const cartItems = useSelector(store => store.cart.items)

  return (
    <div className='text-center m-4 p-4'>
      <h1 className='text-2xl font-bold'>Cart compoent</h1>
      <button 
        className='p-2 m-2 bg-black text-white rounded-lg'
        onClick={handleClearCart}
      >
          Clear Cart
      </button>
      <div className='w-6/12 m-auto'>
        <ItemList items={cartItems} />
      </div>
    </div>
  )
}

export default Cart