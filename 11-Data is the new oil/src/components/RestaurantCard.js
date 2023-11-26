import { CDN_IMG_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard = ({ restaurant }) => {
  const { cloudinaryImageId, name, cuisines, costForTwo, sla, avgRating } = restaurant?.info;
  const user = useContext(UserContext)
  
  return (
    <div 
      key={restaurant?.info?.id} 
      className="m-1 p-1 border w-64 h-auto bg-slate-100 hover:bg-slate-200 shadow-md"
      >
      <img 
        className="w-40 h-40" 
        src={`${CDN_IMG_URL}${cloudinaryImageId}`} 
        alt={name} 
      />
      <h3>{name}</h3>
      <h4>{cuisines?.join(', ')}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
      <h4>{avgRating}</h4>
      <h5>User: {user}</h5>
    </div>
  );
};

// Higher Order Component

// input - RestaurantCard => RestaurantCardOpened

export const withOpenedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-400 text-white text-center w-12 rounded-sm">
          Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;