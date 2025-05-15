import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import '../styles/Cart.css';

const Cart = () => {
  const { cart, getCartTotal, getItemsCount } = useCart();
  const navigate = useNavigate();
  
  const subtotal = getCartTotal();
  const deliveryFee = subtotal > 0 ? 3.99 : 0;
  const tax = subtotal > 0 ? subtotal * 0.1 : 0; // 10% tax
  const total = subtotal + deliveryFee + tax;
  
  const itemsCount = getItemsCount();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <div className="container">
          <div className="empty-cart-content">
            <i className="fas fa-shopping-cart fa-4x"></i>
            <h2>Your cart is empty</h2>
            <p>Add items from restaurants to get started</p>
            <Link to="/" className="btn">Browse Restaurants</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="page-title">Your Cart</h1>
        
        <div className="cart-container">
          <div className="cart-items-container">
            <h2 className="cart-section-title">Order Items ({itemsCount})</h2>
            
            <div className="cart-items">
              {cart.map((item, index) => (
                <CartItem key={`${item.id}-${item.restaurantId}-${index}`} item={item} />
              ))}
            </div>
          </div>
          
          <div className="cart-summary">
            <h2 className="cart-section-title">Order Summary</h2>
            
            <div className="summary-card">
              <div className="summary-line">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="summary-line">
                <span>Delivery Fee:</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
              
              <div className="summary-line">
                <span>Tax:</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              
              <div className="summary-total">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              
              <button 
                className="btn checkout-btn" 
                onClick={handleCheckout}
                disabled={cart.length === 0}
              >
                Proceed to Checkout
              </button>
              
              <Link to="/" className="continue-shopping">
                <i className="fas fa-arrow-left"></i> Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;