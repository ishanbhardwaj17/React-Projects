import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    // cartItems = [{ id: 1, quantity: 2 }]

    function addToCart(productId) {
        const exist = cartItems.find((item) => item.id === productId);

        if (exist) {
            const updatedCartItems = cartItems.map((item) =>
                item.id === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, { id: productId, quantity: 1 }]);
        }
    }

    function removeFromCart(productId) {
        setCartItems(cartItems.filter((item) => item.id !== productId));
    }

    function updateQuantity(productId, quantity) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            const updatedCartItems = cartItems.map((item) =>
                item.id === productId
                    ? { ...item, quantity }
                    : item
            );
            setCartItems(updatedCartItems);
        }
    }

    function clearCart() {
        setCartItems([]);
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    return useContext(CartContext);
};
