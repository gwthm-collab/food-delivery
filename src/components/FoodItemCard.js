import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import '../styles/FoodItemCard.css';

const FoodItemCard = ({ item, restaurantId, restaurantName }) => {
  const { dispatch, cart, hasDifferentRestaurantItems } = useCart();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showAddedToast, setShowAddedToast] = useState(false);

  const { id, name, description, price, image, popular } = item;

  const hasOtherRestaurantItems = hasDifferentRestaurantItems(restaurantId);

  const handleAddToCart = () => {
    if (hasOtherRestaurantItems) {
      setShowConfirmModal(true);
    } else {
      addItemToCart();
    }
  };

  const addItemToCart = () => {
    const cartItem = {
      id,
      name,
      price,
      image,
      restaurantId,
      restaurantName
    };

    dispatch({ type: 'ADD_ITEM', payload: cartItem });
    setShowConfirmModal(false);
    
    // Show toast notification
    setShowAddedToast(true);
    setTimeout(() => {
      setShowAddedToast(false);
    }, 3000);
  };

  const clearCartAndAddItem = () => {
    dispatch({ type: 'CLEAR_CART' });
    addItemToCart();
  };

  return (
    <>
      <div className="food-item-card">
        <div className="food-item-content">
          <div className="food-item-details">
            <h3 className="food-item-name">
              {name}
              {popular && <span className="popular-badge">Popular</span>}
            </h3>
            <p className="food-item-description">{description}</p>
            <p className="food-item-price">${price.toFixed(2)}</p>
          </div>
          
          {image && (
            <div className="food-item-image">
              <img src={image} alt={name} loading="lazy" />
              <button 
                className="add-to-cart-btn" 
                onClick={handleAddToCart}
                aria-label={`Add ${name} to cart`}
              >
                <i className="fas fa-plus"></i>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Confirm Modal for clearing cart */}
      {showConfirmModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Start New Order?</h3>
            <p>Your cart contains items from another restaurant. Would you like to clear your cart and add this item?</p>
            <div className="modal-actions">
              <button 
                className="btn-outline" 
                onClick={() => setShowConfirmModal(false)}
              >
                Cancel
              </button>
              <button 
                className="btn"
                onClick={clearCartAndAddItem}
              >
                Clear Cart & Add
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Added to cart toast notification */}
      {showAddedToast && (
        <div className="toast">
          <i className="fas fa-check-circle"></i> Added to cart!
        </div>
      )}
    </>
  );
};

export default FoodItemCard;