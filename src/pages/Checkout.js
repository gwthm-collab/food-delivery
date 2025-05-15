import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import '../styles/Checkout.css';

const Checkout = () => {
  const { cart, getCartTotal, dispatch } = useCart();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'card',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  const subtotal = getCartTotal();
  const deliveryFee = subtotal > 0 ? 3.99 : 0;
  const tax = subtotal > 0 ? subtotal * 0.1 : 0; // 10% tax
  const total = subtotal + deliveryFee + tax;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    // Required fields
    const requiredFields = ['name', 'email', 'phone', 'address', 'city', 'zipCode'];
    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
      }
    });
    
    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Phone validation
    if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    // Zip code validation
    if (formData.zipCode && !/^\d{5}$/.test(formData.zipCode)) {
      newErrors.zipCode = 'Please enter a valid 5-digit zip code';
    }
    
    // Card validation if payment method is card
    if (formData.paymentMethod === 'card') {
      if (!formData.cardNumber) {
        newErrors.cardNumber = 'This field is required';
      } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
        newErrors.cardNumber = 'Please enter a valid 16-digit card number';
      }
      
      if (!formData.cardExpiry) {
        newErrors.cardExpiry = 'This field is required';
      } else if (!/^\d{2}\/\d{2}$/.test(formData.cardExpiry)) {
        newErrors.cardExpiry = 'Please use MM/YY format';
      }
      
      if (!formData.cardCvv) {
        newErrors.cardCvv = 'This field is required';
      } else if (!/^\d{3,4}$/.test(formData.cardCvv)) {
        newErrors.cardCvv = 'Please enter a valid CVV';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Scroll to first error
      const firstError = document.querySelector('.error-message');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate order processing
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
      
      // Clear cart after successful order
      setTimeout(() => {
        dispatch({ type: 'CLEAR_CART' });
        navigate('/');
      }, 3000);
    }, 2000);
  };
  
  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <h1 className="page-title">Checkout</h1>
        
        <div className="checkout-container">
          <div className="checkout-form-container">
            <form className="checkout-form" onSubmit={handleSubmit}>
              <section className="form-section">
                <h2 className="form-section-title">Delivery Information</h2>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? 'error' : ''}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <div className="error-message">{errors.name}</div>}
                  </div>
                </div>
                
                <div className="form-row two-columns">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'error' : ''}
                      placeholder="Enter your email"
                    />
                    {errors.email && <div className="error-message">{errors.email}</div>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={errors.phone ? 'error' : ''}
                      placeholder="(123) 456-7890"
                    />
                    {errors.phone && <div className="error-message">{errors.phone}</div>}
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="address">Delivery Address</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className={errors.address ? 'error' : ''}
                      placeholder="Street address"
                    />
                    {errors.address && <div className="error-message">{errors.address}</div>}
                  </div>
                </div>
                
                <div className="form-row two-columns">
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={errors.city ? 'error' : ''}
                      placeholder="Enter city"
                    />
                    {errors.city && <div className="error-message">{errors.city}</div>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="zipCode">Zip Code</label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className={errors.zipCode ? 'error' : ''}
                      placeholder="12345"
                    />
                    {errors.zipCode && <div className="error-message">{errors.zipCode}</div>}
                  </div>
                </div>
              </section>
              
              <section className="form-section">
                <h2 className="form-section-title">Payment Method</h2>
                
                <div className="form-row payment-methods">
                  <div className="payment-method">
                    <input
                      type="radio"
                      id="card"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleChange}
                    />
                    <label htmlFor="card">
                      <i className="far fa-credit-card"></i> Credit Card
                    </label>
                  </div>
                  
                  <div className="payment-method">
                    <input
                      type="radio"
                      id="cash"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === 'cash'}
                      onChange={handleChange}
                    />
                    <label htmlFor="cash">
                      <i className="fas fa-money-bill-wave"></i> Cash on Delivery
                    </label>
                  </div>
                </div>
                
                {formData.paymentMethod === 'card' && (
                  <div className="card-details">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="cardNumber">Card Number</label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          className={errors.cardNumber ? 'error' : ''}
                          placeholder="1234 5678 9012 3456"
                          maxLength="19"
                        />
                        {errors.cardNumber && <div className="error-message">{errors.cardNumber}</div>}
                      </div>
                    </div>
                    
                    <div className="form-row two-columns">
                      <div className="form-group">
                        <label htmlFor="cardExpiry">Expiry Date</label>
                        <input
                          type="text"
                          id="cardExpiry"
                          name="cardExpiry"
                          value={formData.cardExpiry}
                          onChange={handleChange}
                          className={errors.cardExpiry ? 'error' : ''}
                          placeholder="MM/YY"
                          maxLength="5"
                        />
                        {errors.cardExpiry && <div className="error-message">{errors.cardExpiry}</div>}
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="cardCvv">CVV</label>
                        <input
                          type="text"
                          id="cardCvv"
                          name="cardCvv"
                          value={formData.cardCvv}
                          onChange={handleChange}
                          className={errors.cardCvv ? 'error' : ''}
                          placeholder="123"
                          maxLength="4"
                        />
                        {errors.cardCvv && <div className="error-message">{errors.cardCvv}</div>}
                      </div>
                    </div>
                  </div>
                )}
              </section>
              
              <button 
                type="submit" 
                className={`btn checkout-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Processing Order...
                  </>
                ) : (
                  `Place Order • $${total.toFixed(2)}`
                )}
              </button>
            </form>
          </div>
          
          <div className="order-summary">
            <h2 className="form-section-title">Order Summary</h2>
            
            <div className="order-summary-card">
              <div className="order-items">
                {cart.map((item, index) => (
                  <div className="order-item" key={`${item.id}-${item.restaurantId}-${index}`}>
                    <div className="order-item-quantity">{item.quantity}x</div>
                    <div className="order-item-name">{item.name}</div>
                    <div className="order-item-price">${(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                ))}
              </div>
              
              <div className="order-totals">
                <div className="order-subtotal">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="order-fee">
                  <span>Delivery Fee</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                
                <div className="order-tax">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                
                <div className="order-total">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Order Success Modal */}
      {showSuccessModal && (
        <div className="success-modal-overlay">
          <div className="success-modal">
            <div className="success-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h2>Order Placed Successfully!</h2>
            <p>Thank you for your order. You will receive a confirmation email shortly.</p>
            <div className="redirect-message">Redirecting to homepage...</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;