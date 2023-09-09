import { CDN_IMG_URL } from "../utils/constants";

const RestaurantCard = ({ key, restaurant }) => {
  const { cloudinaryImageId, name, cuisines, costForTwo, sla, avgRating } = restaurant?.info;
  return (
    <div key={key} className="res-card" style={{ width: '250px', height: 'auto', border: '1px solid gray', wordWrap: 'break-word', margin: '10px 0', padding: '5px', backgroundColor: '#ebedf0' }}>
      <img src={`${CDN_IMG_URL}${cloudinaryImageId}`} alt={name} width={150} height={150} />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
