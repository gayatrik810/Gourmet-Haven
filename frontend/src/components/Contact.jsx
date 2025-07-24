import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);
    
        try {
            const response = await axios.post('http://localhost:5000/api/contact', { // Change this line
                name,
                email,
                message
            });
            setSuccess('Message sent successfully!');
            setName('');
            setEmail('');
            setMessage('');
        } catch (err) {
            setError('Failed to send message. Please try again.');
            console.error(err); // Log the error for debugging
        }
    };

    return (
        <section id="contact" className="py-20 px-6">
            <div className="container mx-auto">
                <h2 className="playfair text-4xl font-bold text-center mb-12">Contact Us</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="glass p-8 rounded-xl">
                        <h3 className="text-2xl mb-6">Location & Hours</h3>
                        <div className="space-y-4">
                            <p><i className="bi bi-geo-alt mr-2"></i>123 Gourmet Street, Foodie City</p>
                            <p><i className="bi bi-clock mr-2"></i>Mon-Sun: 11:00 AM - 11:00 PM</p>
                            <p><i className="bi bi-telephone mr-2"></i>+1 234 567 890</p>
                            <p><i className="bi bi-envelope mr-2"></i>info@gourmethaven.com</p>
                        </div>
                    </div>
                    <div className="glass bg-black p-8 rounded-xl">
                        <h3 className="text-2xl mb-6">Send us a Message</h3>
                        {error && <div className="text-red-500">{error}</div>}
                        {success && <div className="text-green-500">{success}</div>}
                        <form id="contact-form" className="space-y-4" onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                placeholder="Your Name" 
                                className="glass w-full p-3 rounded-lg" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <input 
                                type="email" 
                                placeholder="Your Email" 
                                className="glass w-full p-3 rounded-lg" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <textarea 
                                placeholder="Your Message" 
                                rows="5" 
                                className="glass w-full p-3 rounded-lg" 
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                            <button 
                                type="submit" 
                                className="bg-yellow-400 text-black px-8 py-3 rounded-full hover:bg-yellow-300 transition w-full"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;



