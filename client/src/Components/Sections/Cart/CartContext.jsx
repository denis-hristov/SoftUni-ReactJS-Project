import { createContext, useState, useContext } from "react";
    const CartContext = createContext();
    
    export function useCart() {
        return useContext(CartContext);
    }
    
    export function CartProvider({ children }) {
        const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}
