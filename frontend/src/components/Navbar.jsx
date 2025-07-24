import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount, onCartClick ,onMobileMenuClick}) => {
    return (
        <nav className="glass fixed w-full z-50 px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="playfair text-2xl font-bold">Gourmet Haven</h1>
            <div className="hidden md:flex space-x-8">
                <a href="#home" className="hover:text-yellow-400 transition">Home</a>
                <a href="#menu" className="hover:text-yellow-400 transition">Menu</a>
                <a href="#about" className="hover:text-yellow-400 transition">About</a>
                <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
                <a href="#book" className="hover:text-yellow-400 transition">Book a Table</a>
                    <button onClick={onCartClick} 
                        className="text-white hover:text-yellow-400 relative">
                        <span className="material-icons">🛒</span> {/* Use an icon library or your own icon */}
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                                {cartCount}
                            </span>
                        )}
                    </button>

                </div>
                
            </div>
        </nav>
    );
};

export default Navbar;