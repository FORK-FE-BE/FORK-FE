import React from 'react';
import { UserProvider } from './UserContext';
import { CartProvider } from './CartContext';
// 필요한 Context 추가 import

// 여러 Provider를 중첩해 감싸주는 컴포넌트
export const AppProvider = ({ children }) => {
    return (
        <UserProvider>
            <CartProvider>
                {/* 그 외 필요한 Provider 중첩 */}
                {children}
            </CartProvider>
        </UserProvider>
    );
};
