import React from 'react';

const CartSidebar = ({ cartItems, onClose, onRemove }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    // Function to handle checkout
    const checkout = () => {
        if (cartItems.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        alert('Thank you for your order! Total: $' + totalPrice.toFixed(2));
        onRemove(); // Clear the cart
        onClose(); // Close the cart sidebar
    };

    return (
        <div className="fixed top-0 right-0 h-full w-80 glass transform transition-transform duration-300 z-50">
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
                <button onClick={onClose} className="hover:text-gray-800 mt-4 bg-red-400 text-black px-4 py-2 rounded hover:bg-red-300 transition">Close</button>
                <div className="flex flex-col" id="cart-items">
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item._id} className="flex justify-between items-center mb-2">
                                <div>
                                    <h4 className="font-medium">{item.name}</h4>
                                    <p className="text-sm text-gray-300">${item.price.toFixed(2)}</p>
                                </div>
                                <button onClick={() => onRemove(item._id)} className="text-red-400">
                                    <i className="bi bi-trash"></i> {/* Bootstrap icon for trash */}
                                </button>
                            </div>
                        ))
                    )}
                </div>
                <div className="mt-4">
                    <h3 className="font-bold">Total: ${totalPrice.toFixed(2)}</h3>
                </div>
                <button 
                    onClick={checkout} 
                    className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition"
                >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default CartSidebar;