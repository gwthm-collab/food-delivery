import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import FoodItemCard from '../components/FoodItemCard';
import '../styles/RestaurantDetails.css';

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState(null);
  const [activeCategory, setActiveCategory] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    // Fetch restaurant details and menu from API
    const fetchData = async () => {
      try {
        const [restaurantRes, menuRes] = await Promise.all([
          axios.get(`https://localhost:7208/api/Restaurant/${id}`), // Replace with your API endpoint
          axios.get(`https://localhost:7208/api/Restaurant/${id}/menu`) // Replace with your API endpoint
        ]);
        setRestaurant(restaurantRes.data);
        setMenu(menuRes.data);

        if (menuRes.data && menuRes.data.categories.length > 0) {
          setActiveCategory(menuRes.data.categories[0].id);
        }
      } catch (error) {
        setRestaurant(null);
        setMenu(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading restaurant details...</p>
      </div>
    );
  }

  if (!restaurant) {
    return (
      <div className="error-container">
        <i className="fas fa-exclamation-circle fa-3x"></i>
        <h2>Restaurant Not Found</h2>
        <p>We couldn't find the restaurant you're looking for.</p>
        <a href="/" className="btn">Go Back Home</a>
      </div>
    );
  }

  return (
    <div className="restaurant-details-page">
      <div className="restaurant-hero" style={{ backgroundImage: `url(${restaurant.image})` }}>
        <div className="restaurant-hero-overlay">
          <div className="container">
            <div className="restaurant-hero-content">
              <h1 className="restaurant-hero-title">{restaurant.name}</h1>
              <div className="restaurant-hero-info">
                <span className="restaurant-cuisine">{restaurant.cuisine}</span>
                <span className="restaurant-rating">
                  <i className="fas fa-star"></i> {restaurant.rating}
                </span>
                <span className="restaurant-delivery-time">
                  <i className="fas fa-clock"></i> {restaurant.deliveryTime}
                </span>
              </div>
              <p className="restaurant-description">{restaurant.description}</p>
              
              {!restaurant.isOpen && (
                <div className="closed-banner">
                  <i className="fas fa-clock"></i> Currently Closed
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="restaurant-menu-container">
          {menu && menu.categories.length > 0 ? (
            <>
              <div className="menu-categories">
                <div className="menu-categories-sticky">
                  {menu.categories.map(category => (
                    <button
                      key={category.id}
                      className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="menu-items">
                {menu.categories.map(category => (
                  <div 
                    id={category.id} 
                    key={category.id}
                    className={`menu-category ${activeCategory === category.id ? 'active' : ''}`}
                  >
                    <h2 className="category-title">{category.name}</h2>
                    
                    <div className="category-items">
                      {category.items.map(item => (
                        <FoodItemCard 
                          key={item.id} 
                          item={item} 
                          restaurantId={restaurant.id}
                          restaurantName={restaurant.name}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="no-menu">
              <i className="fas fa-utensils fa-3x"></i>
              <p>Menu not available for this restaurant.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;