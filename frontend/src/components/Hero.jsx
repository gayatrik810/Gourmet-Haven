import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b" alt="Restaurant Background" className="w-full h-full object-cover opacity-50"/>
        </div>
        <div className="glass p-12 rounded-xl text-center z-10 max-w-3xl mx-4">
            <h1 className="playfair text-5xl md:text-6xl font-bold mb-6">Experience Fine Dining</h1>
            <p className="text-lg mb-8">Indulge in culinary excellence with our masterfully crafted dishes</p>
            <a href="#menu" className="bg-yellow-400 text-black px-8 py-3 rounded-full hover:bg-yellow-300 transition">Explore Menu</a>
        </div>
    </section>
    );
};

export default Hero;