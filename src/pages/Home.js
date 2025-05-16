import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RestaurantCard from '../components/RestaurantCard';
import '../styles/Home.css';

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch restaurants from API
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    axios.get('https://localhost:7208/api/Restaurant') // Replace with your API endpoint
      .then(response => {
        setRestaurants(response.data);
        setFilteredRestaurants(response.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setError('Failed to load restaurants');
        setIsLoading(false);
      });
  }, []);

  // Get unique cuisines for filter
  const cuisines = [...new Set(restaurants.map(restaurant => restaurant.cuisine))];

  // Filter restaurants based on search term and selected cuisine
  useEffect(() => {
    setIsLoading(true);

    const timeoutId = setTimeout(() => {
      const filtered = restaurants.filter(restaurant => {
        const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             restaurant.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
                             
        const matchesCuisine = selectedCuisine === '' || restaurant.cuisine === selectedCuisine;
        
        return matchesSearch && matchesCuisine;
      });

      setFilteredRestaurants(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, selectedCuisine, restaurants]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle cuisine filter change
  const handleCuisineChange = (e) => {
    setSelectedCuisine(e.target.value);
  };

  // Featured restaurants
  const featuredRestaurants = restaurants.filter(restaurant => restaurant.featured && restaurant.isOpen);

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">Order Food Delivery</h1>
          
          <div className="search-bar">
            <i className="fas fa-search search-icon"></i>
            <input 
              type="text" 
              placeholder="Search for restaurant, cuisine or dish..." 
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </section>
      
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Restaurants</h2>
          
          <div className="restaurant-carousel">
            {featuredRestaurants.map(restaurant => (
              <div className="carousel-item" key={restaurant.id}>
                <RestaurantCard restaurant={restaurant} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="restaurants-section">
        <div className="container">
          <div className="restaurants-header">
            <h2 className="section-title">All Restaurants</h2>
            
            <div className="filter-container">
              <select 
                className="cuisine-filter" 
                value={selectedCuisine} 
                onChange={handleCuisineChange}
              >
                <option value="">All Cuisines</option>
                {cuisines.map(cuisine => (
                  <option key={cuisine} value={cuisine}>{cuisine}</option>
                ))}
              </select>
            </div>
          </div>
          
          {isLoading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Finding restaurants...</p>
            </div>
          ) : filteredRestaurants.length > 0 ? (
            <div className="restaurants-grid">
              {filteredRestaurants.map(restaurant => (
                <div className="restaurant-grid-item" key={restaurant.id}>
                  <RestaurantCard restaurant={restaurant} />
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <i className="fas fa-search fa-3x"></i>
              <p>No restaurants found matching your criteria</p>
              <button 
                className="btn" 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCuisine('');
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;