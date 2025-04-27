import React, { createContext, useState, useEffect } from 'react';

export const prodContext = createContext();

export default function CartWishlistContext({ children }) {
  const [cart, setCart] = useState([]);
  const [wished, setWished] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showWish, setShowWish] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWishlist) setWished(JSON.parse(savedWishlist));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('wishlist', JSON.stringify(wished));
  }, [cart, wished]);

  return (
    <prodContext.Provider value={{ cart, setCart, wished, setWished, showCart, setShowCart, showWish, setShowWish}}>
      {children}
    </prodContext.Provider>
  );
}