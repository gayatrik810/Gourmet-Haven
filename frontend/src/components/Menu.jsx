import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Menu = ({ addToCart }) => {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedPrice, setSelectedPrice] = useState('');

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/menu'); // Adjust the URL as needed
                setMenuItems(response.data);
            } catch (err) {
                setError('Failed to fetch menu items');
            } finally {
                setLoading(false);
            }
        };
        fetchMenuItems();
    }, []);

    if (loading) {
        return <div className="text-center py-20">Loading menu items...</div>;
    }

    if (error) {
        return <div className="text-center py-20 text-red-500">{error}</div>;
    }

    // Filter menu items based on search term, category, and price
    const filteredMenuItems = menuItems.filter(item => {
        const matchesSearch = item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
        const matchesPrice = selectedPrice ? 
            (selectedPrice === 'low' && item.price <= 20) ||
            (selectedPrice === 'medium' && item.price > 20 && item.price <= 50) ||
            (selectedPrice === 'high' && item.price > 50) : true;
    
        return matchesSearch && matchesCategory && matchesPrice;
    });
    return (
        <section id="menu" className="py-20 px-6">
        <div className="container mx-auto">
            <h2 className="playfair text-4xl font-bold text-center mb-12">Our Menu</h2>
        
            <div className="glass p-6 rounded-xl mb-12">
                <div className="flex flex-wrap gap-4">
                    <input type="text" id="search" placeholder="Search dishes..."  className="glass p-2 rounded-lg flex-grow"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                    <select id="category" className="glass p-2 rounded-lg"  value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                        <option value="">All Categories</option>
                        <option value="starters">Starters</option>
                        <option value="mains">Main Course</option>
                        <option value="desserts">Desserts</option>
                    </select>
                    <select id="price" className="glass p-2 rounded-lg"  value={selectedPrice}
                    onChange={(e) => setSelectedPrice(e.target.value)}
                >
                        <option value="">All Prices</option>
                        <option value="low">$0 - $20</option>
                        <option value="medium">$21 - $50</option>
                        <option value="high">$50+</option>
                    </select>
                </div>
            </div>

            
            <div className="grid  bg-black grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="menu-items">
              
                {filteredMenuItems.map(item => (
                    <div key={item._id} className="bg-black glass p-2 rounded-lg p-6 rounded-xl shadow-md">
                        <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                        <p className="text-gray-300 mb-4">{item.description}</p>
                        <span className="text-yellow-400 flex justify-between items-center">${item.price}</span>
                        <button 
                            onClick={() => addToCart(item)} 
                            className="bg-yellow-400 text-black px-9 py-1 rounded-full hover:bg-yellow-300 transition">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
};

export default Menu;