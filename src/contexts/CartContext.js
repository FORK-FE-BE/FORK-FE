// src/contexts/CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({
        restaurantId: null,
        cartItemList: [],
        totalPrice: 0,
    });

    const updateCart = (cartData) => {
        setCart(cartData);
    };

    const clearCart = () => {
        setCart({
            restaurantId: null,
            cartItemList: [],
            totalPrice: 0,
        });
    };

    return (
        <CartContext.Provider value={{ cart, updateCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
