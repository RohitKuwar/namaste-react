import React from 'react'
import ItemList from './ItemList'

function RestaurantCategory({ data, showItems, setShowIndex }) {
    const { title, itemCards } = data?.card?.card

  return (
    <div className='w-9/12 mx-auto my-4 bg-gray-50 shadow-lg p-4'>
        <div 
            style={{ cursor: 'pointer' }}
            className='flex justify-between' 
            onClick={() => setShowIndex()}
        >
            <span className='font-bold text-lg'>{title} ({itemCards.length})</span>
            <span>⬇️</span>
        </div>
            {showItems && <ItemList items={itemCards} />}
    </div>
  )
}

export default RestaurantCategory