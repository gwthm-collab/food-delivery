import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import '../styles/Header.css';

const Header = () => {
  const { cart } = useCart();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Calculate total items in cart
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo">
          <span className="logo-text">Food Delivery App</span>
        </Link>

        <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                Restaurants
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/cart" 
                className={`cart-link ${location.pathname === '/cart' ? 'active' : ''}`}
              >
                <i className="fas fa-shopping-cart"></i>
                <span>Cart</span>
                {cartItemCount > 0 && (
                  <span className="cart-badge">{cartItemCount}</span>
                )}
              </Link>
            </li>
          </ul>
        </nav>

        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
    </header>
  );
};

export default Header;