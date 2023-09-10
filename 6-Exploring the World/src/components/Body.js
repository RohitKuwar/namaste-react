import { useState, useEffect } from 'react'
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [ restaurants, setRestaurants ] = useState([])
  const [ filteredRestaurants, setFilteredRestaurants ] = useState([])
  const [searchText, setSearchText] = useState('')

  // Whenever state variable updated, React triggers a reconciliation cycle(re-renders the component)

  useEffect(() => {
    async function fetchData () {
      const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0403896&lng=72.5160459&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
      const res = await data.json();
      console.log(res)
      setRestaurants(res?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilteredRestaurants(res?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    fetchData()
  }, [])

  const filterRes = () => {
    setRestaurants(restaurants.filter(i => i.info.avgRating > 4))
  }
  const clearFilter = () => {
    setRestaurants(restaurants)
  }

  if(restaurants?.length === 0) {
    return <h1>Loading...</h1>
  }
  
  return (
    <div>
      <div className="search">Search</div>
      <div>
        <input type="text" placeholder='search' value={searchText} onChange={e => setSearchText(e.target.value)} />
        <button onClick={() => {
          const filteredData = restaurants?.filter(res => res?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase()))
          console.log(filteredData)
          setFilteredRestaurants(filteredData)
        }}>Search</button>
      </div>
      <button onClick={filterRes}>Top Rated Restaurants</button>
      <button onClick={clearFilter}>Clear Filter</button>
      <div className="res-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {filteredRestaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
