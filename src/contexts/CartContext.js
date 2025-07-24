// src/contexts/CartContext.js
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import {BASE_URL} from "../constants";
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

    const refreshCart = async (userId) => {
        if (!userId) return; // userId가 없으면 함수 종료
        try {
            const response = await axios.get(`${BASE_URL}/api/cart/${userId}`);
            updateCart(response.data);
        } catch (error) {
            console.error('장바구니 새로고침 실패:', error);
            // 필요 시 에러 처리 추가
        }
    };

    return (
        <CartContext.Provider value={{ cart, updateCart, clearCart,refreshCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
