import { useState } from 'react'
import RestaurantCard from "./RestaurantCard";
import restaurantss from "../utils/mockData"

const Body = () => {
  const [ restaurants, setRestaurants ] = useState(restaurantss)
  const filterRes = () => {
    setRestaurants(restaurants.filter(i => i.info.avgRating > 4))
  }
  const clearFilter = () => {
    setRestaurants(restaurantss)
  }
  console.log('restaurants', restaurants)
  return (
    <div>
      <div className="search">Search</div>
      <button onClick={filterRes}>Filter</button>
      <button onClick={clearFilter}>Clear Filter</button>
      <div className="res-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {restaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
