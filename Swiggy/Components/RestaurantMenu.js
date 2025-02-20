import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CDN_LINK, restaurantMenuLink } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurantData, setRestaurantData] = useState(null);
  const [itemCard, setItemCard] = useState(null);
  // Dispatch Actions
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
     dispatch(addItem(item))
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch(restaurantMenuLink + resId);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setRestaurantData(data);
      if (
        data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card?.itemCards
      ) {
        setItemCard(
          data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
            ?.card?.card?.itemCards
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (!restaurantData) return <h1>Loading...</h1>;

  const { name, costForTwoMessage, cuisines, sla ,imageId} =
    restaurantData?.data?.cards[2]?.card?.card?.info;

  return (
    <div className="menu-container">
      <div className="restaurant-info">
        <h1 className="restaurant-name">{name}</h1>
        <p className="restaurant-cost">{costForTwoMessage}</p>
        <p className="restaurant-sla">{sla?.slaString}</p>
        <p className="restaurant-cuisines">{cuisines?.join(", ")}</p>
      </div>

      <h1 className="menu-heading">Recommended</h1>
      <div className="menu-items">
        {itemCard?.map((item) => (
          
          <div key={item.card.info.id} className="menu-item">
            <div className="info">
            <h2 className="item-name">{item.card.info.name}</h2>
            <p className="item-description">{item.card.info.description}</p>
            <p className="item-price">Rs {item.card.info.price / 100}</p>
            <button className="add-to-cart" onClick={()=>{handleAddItem(item)}}>Add to Cart</button>
            </div>
            <div className="image-container">
              <img
                src={CDN_LINK +  item.card.info.imageId}
                alt="item"
                className="item-image"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
