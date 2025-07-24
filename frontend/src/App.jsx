import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Booking from './components/Booking';
import CartSidebar from './components/CartSidebar';

const App = () => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]); // Add item to cart
    };

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item._id !== id)); // Remove item from cart
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div>
            <Navbar 
                cartCount={cartItems.length} // Pass the number of items in the cart
                onCartClick={() => setIsCartOpen(true)} 
            />
            <Hero />
            <Menu addToCart={addToCart} />
            <About />
            <Contact />
            <Booking />

            <button onClick={toggleCart} className="bg-blue-500 text-white p-2 rounded">
                {isCartOpen ? 'Close Cart' : 'Open Cart'}
            </button>
            {isCartOpen && (
                <CartSidebar 
                    cartItems={cartItems} 
                    onClose={toggleCart} 
                    onRemove={removeFromCart} // Pass the remove function
                />
            )}
        </div>
    );
};

export default App;