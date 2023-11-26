import { useState, useEffect } from 'react'
import RestaurantCard, { withOpenedLabel } from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  const [ restaurants, setRestaurants ] = useState([])
  const [ filteredRestaurants, setFilteredRestaurants ] = useState([])
  const [searchText, setSearchText] = useState('')
  const status = useOnlineStatus()

  const RestaurantCardOpened = withOpenedLabel(RestaurantCard)

  // Whenever state variable updated, React triggers a reconciliation cycle(re-renders the component)

  useEffect(() => {
    async function fetchData () {
      const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0403896&lng=72.5160459&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
      const res = await data.json();
      setRestaurants(res?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilteredRestaurants(res?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    fetchData()
  }, [])

  const filterRes = () => {
    setFilteredRestaurants(filteredRestaurants.filter(i => i.info.avgRating > 4))
  }
  const clearFilter = () => {
    setFilteredRestaurants(restaurants)
  }

  if(!status) {
    return <h1>Looks like you are disconnected...</h1>
  }

  if(restaurants?.length === 0) {
    return <h1>Loading...</h1>
  }
  
  return (
    <div>
      <div className="search px-1">Search</div>
      <div>
        <input className="border border-solid border-black mx-1 p-1" type="text" placeholder='search' value={searchText} onChange={e => setSearchText(e.target.value)} />
        <button 
        className="p-1 px-2 ml-2 bg-gray-200"
        onClick={() => {
          const filteredData = restaurants?.filter(res => res?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase()))
          setFilteredRestaurants(filteredData)
        }}>Search</button>
      </div>
      <button
       className="bg-pink px-2 ml-1 mt-2 bg-gray-200 border border-solid border-black"
       onClick={filterRes}>Top Rated Restaurants</button>
      <button 
        className="bg-pink px-2 ml-2 bg-gray-200 border border-solid border-black"
        onClick={clearFilter}>Clear Filter</button>
      <div className="flex flex-wrap justify-around m-1">
        {filteredRestaurants?.map((restaurant) => (
          <Link to={"restaurant/" + restaurant?.info?.id}>
            {
              restaurant?.info?.veg ?
              <RestaurantCardOpened restaurant={restaurant} /> :
              <RestaurantCard restaurant={restaurant} />
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
