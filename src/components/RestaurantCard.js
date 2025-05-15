import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/RestaurantCard.css';

const RestaurantCard = ({ restaurant }) => {
  const { id, name, cuisine, rating, deliveryTime, deliveryFee, image, isOpen } = restaurant;

  return (
    <Link to={`/restaurant/${id}`} className="restaurant-card-link">
      <div className={`restaurant-card ${!isOpen ? 'closed' : ''}`}>
        <div className="restaurant-card-image">
          <img src={image} alt={name} loading="lazy" />
          {restaurant.featured && <span className="featured-badge">Featured</span>}
          {!isOpen && <div className="closed-overlay">Closed</div>}
        </div>
        
        <div className="restaurant-card-content">
          <div className="restaurant-card-header">
            <h3 className="restaurant-name">{name}</h3>
            <div className="restaurant-rating">
              <i className="fas fa-star"></i>
              <span>{rating}</span>
            </div>
          </div>
          
          <p className="restaurant-cuisine">{cuisine}</p>
          
          <div className="restaurant-card-footer">
            <span className="delivery-time">
              <i className="fas fa-clock"></i> {deliveryTime}
            </span>
            <span className="delivery-fee">
              {deliveryFee === 0 ? 'Free Delivery' : `$${deliveryFee.toFixed(2)} delivery`}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;