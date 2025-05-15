import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-title">Food Delivery App</h3>
            <p>Food Delivery in Web app.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#">Restaurants</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Contact</h3>
            <address className="contact-info">
              <p><i className="fas fa-map-marker-alt"></i> 123, restaurant Street</p>
              <p><i className="fas fa-phone"></i> +91 1234567890</p>
              <p><i className="fas fa-envelope"></i> info@gmail.com</p>
            </address>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Food Delivery.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;