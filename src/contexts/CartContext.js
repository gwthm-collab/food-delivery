import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Create context
const CartContext = createContext();

// Cart reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.findIndex(
        item => item.id === action.payload.id && item.restaurantId === action.payload.restaurantId
      );

      if (existingItemIndex >= 0) {
        const updatedState = [...state];
        updatedState[existingItemIndex].quantity += 1;
        return updatedState;
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    }
    
    case 'REMOVE_ITEM': {
      const existingItemIndex = state.findIndex(
        item => item.id === action.payload.id && item.restaurantId === action.payload.restaurantId
      );

      if (existingItemIndex >= 0) {
        const updatedState = [...state];
        if (updatedState[existingItemIndex].quantity > 1) {
          updatedState[existingItemIndex].quantity -= 1;
          return updatedState;
        } else {
          return state.filter(item => 
            !(item.id === action.payload.id && item.restaurantId === action.payload.restaurantId)
          );
        }
      }
      return state;
    }
    
    case 'DELETE_ITEM':
      return state.filter(item => 
        !(item.id === action.payload.id && item.restaurantId === action.payload.restaurantId)
      );
    
    case 'CLEAR_CART':
      return [];
      
    case 'SET_QUANTITY': {
      const { id, restaurantId, quantity } = action.payload;
      if (quantity <= 0) {
        return state.filter(item => 
          !(item.id === id && item.restaurantId === restaurantId)
        );
      }
      
      return state.map(item => {
        if (item.id === id && item.restaurantId === restaurantId) {
          return { ...item, quantity };
        }
        return item;
      });
    }
    
    default:
      return state;
  }
};

// CartProvider component
export const CartProvider = ({ children }) => {
  // Load cart from localStorage if exists
  const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Calculate cart totals
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Calculate items total in cart
  const getItemsCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Check if cart has items from a specific restaurant
  const hasItemsFromRestaurant = (restaurantId) => {
    return cart.some(item => item.restaurantId === restaurantId);
  };

  // Check if a different restaurant's items are in cart
  const hasDifferentRestaurantItems = (restaurantId) => {
    return cart.some(item => item.restaurantId !== restaurantId && item.restaurantId !== undefined);
  };

  // Get all items from specific restaurant
  const getRestaurantItems = (restaurantId) => {
    return cart.filter(item => item.restaurantId === restaurantId);
  };

  const value = {
    cart,
    dispatch,
    getCartTotal,
    getItemsCount,
    hasItemsFromRestaurant,
    hasDifferentRestaurantItems,
    getRestaurantItems
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};