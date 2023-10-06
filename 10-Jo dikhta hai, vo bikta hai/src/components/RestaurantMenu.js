import React from "react";
import Header from "./Header";
import { CDN_IMG_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

function RestaurantMenu() {
  const { restaurantId } = useParams();
  const restaurantData = useRestaurantMenu(restaurantId);

  if (restaurantData?.length === 0) {
    return <h1>Loading...</h1>;
  }

  const {
    name,
    areaName,
    city,
    cuisines,
    expectationNotifiers,
    sla,
    costForTwoMessage,
  } = restaurantData?.cards[0]?.card?.card?.info;
  const { itemCards } =
    restaurantData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div>
      <Header />
      <h1>{name}</h1>
      <h2>
        {areaName}, {city}
      </h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{expectationNotifiers[0]?.text}</h4>
      <h5>
        {sla?.slaString} | {costForTwoMessage}
      </h5>

      <div>
        {itemCards?.map((res) => {
          return (
            <div key={res?.card?.info?.id}>
              <div className="flex items-center">
                {res?.card?.info?.itemAttribute?.vegClassifier === "NONVEG" ? (
                  <p className="text-green-600">Non-veg</p>
                ) : (
                  <p className="text-green-600">Veg</p>
                )}
                <p>{res?.card?.info?.isBestseller ? "⭐Bestseller" : ""}</p>
              </div>
              <h4>{res?.card?.info?.name}</h4>
              <h5>₹{res?.card?.info?.price / 100}</h5>
              <p>{res?.card?.info?.description}</p>
              <img
                className="w-40 h-40"
                src={`${CDN_IMG_URL}${res?.card?.info?.imageId}`}
                alt={name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RestaurantMenu;
