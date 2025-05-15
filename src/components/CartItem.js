import React from 'react';
import { useCart } from '../contexts/CartContext';
import '../styles/CartItem.css';

const CartItem = ({ item }) => {
  const { dispatch } = useCart();
  const { id, name, price, quantity, image, restaurantId, restaurantName } = item;

  const handleRemoveItem = () => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: { id, restaurantId }
    });
  };

  const handleAddItem = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { id, name, price, image, restaurantId, restaurantName }
    });
  };

  const handleDeleteItem = () => {
    dispatch({
      type: 'DELETE_ITEM',
      payload: { id, restaurantId }
    });
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={image} alt={name} />
      </div>
      
      <div className="cart-item-content">
        <div className="cart-item-info">
          <h3 className="cart-item-name">{name}</h3>
          <p className="cart-item-restaurant">{restaurantName}</p>
        </div>
        
        <div className="cart-item-actions">
          <div className="quantity-control">
            <button 
              className="quantity-btn" 
              onClick={handleRemoveItem}
              aria-label="Decrease quantity"
            >
              <i className="fas fa-minus"></i>
            </button>
            <span className="quantity">{quantity}</span>
            <button 
              className="quantity-btn" 
              onClick={handleAddItem}
              aria-label="Increase quantity"
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
          
          <div className="cart-item-price-container">
            <span className="cart-item-price">${(price * quantity).toFixed(2)}</span>
            <button 
              className="remove-item-btn" 
              onClick={handleDeleteItem}
              aria-label="Remove item"
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;