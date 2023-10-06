import { CDN_IMG_URL } from "../utils/constants";

const RestaurantCard = ({ key, restaurant }) => {
  const { cloudinaryImageId, name, cuisines, costForTwo, sla, avgRating } = restaurant?.info;
  return (
    <div 
      key={key} 
      className="m-1 p-1 border w-64 h-auto bg-slate-100 hover:bg-slate-200 shadow-md"
      >
      <img 
        className="w-40 h-40" 
        src={`${CDN_IMG_URL}${cloudinaryImageId}`} 
        alt={name} 
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
