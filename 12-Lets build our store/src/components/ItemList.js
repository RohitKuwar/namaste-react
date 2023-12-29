import React from 'react'
import { CDN_IMG_URL } from "../utils/constants";
import { useDispatch } from 'react-redux';
import { addItem } from '../slices/cartSlice';

function ItemList({ items }) {
    const dispatch = useDispatch()

    const handleAddItem = (item) => {
        // dispatch an action
        dispatch(addItem(item))
    }

  return (
    <div>
        {
            items?.map(item => {
                return (
                    <div key={item?.card?.info?.id} className='p-2 flex justify-between items-center border-b-2'>
                        <div className='w-8/12'>
                            <h1 className='font-medium'>{item?.card?.info?.name}</h1>
                            <h5>{item?.card?.info?.price}</h5>
                            <p>{item?.card?.info?.description}</p>
                        </div>
                        <div className='w-3/12'>
                            <div className='absolute'>
                                <button
                                    className='p-2 m-2 bg-black text-white rounded-lg'
                                    onClick={() => handleAddItem(item)}
                                >
                                    Add +
                                </button>
                            </div>
                            <img src={CDN_IMG_URL + item?.card?.info?.imageId} alt="image" className='w-full border-2' />
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ItemList