import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CDN_LINK } from "../utils/constant";
import { clearCart } from "../utils/cartSlice";

const CartPage = () => {
  // Dispatch Actions
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="menu-container">
      <button onClick={handleClear}>Clear Cart</button>
      <div className="menu-items">
        {cartItems?.map((item) => (
          <div key={item.card.info.id} className="menu-item">
            <div className="info">
              <h2 className="item-name">{item.card.info.name}</h2>
              <p className="item-description">{item.card.info.description}</p>
              <p className="item-price">Rs {item.card.info.price / 100}</p>
              <button
                className="add-to-cart"
                onClick={() => {
                  handleAddItem(item);
                }}
              >
                Add to Cart
              </button>
            </div>
            <div className="image-container">
              <img
                src={CDN_LINK + item.card.info.imageId}
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

export default CartPage;
