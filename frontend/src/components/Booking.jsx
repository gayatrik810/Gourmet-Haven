import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(''); // Added phone state
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [specialRequests, setSpecialRequests] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        try {
            const response = await axios.post('http://localhost:5000/api/bookings', {
                name,
                email,
                phone, // Include phone in the request
                date,
                time,
                guests,
                specialRequests
            });
            setSuccess('Booking made successfully!');
            setName('');
            setEmail('');
            setPhone(''); // Reset phone field
            setDate('');
            setTime('');
            setGuests(1);
            setSpecialRequests('');
        } catch (err) {
            setError('Failed to make booking. Please try again.');
            console.error(err); // Log the error for debugging
        }
    };

    return (
        <section id="book" className="py-20 px-6">
            <div className="container mx-auto">
                <h2 className="playfair text-4xl font-bold text-center mb-12">Book a Table</h2>
                <div className="glass p-8 rounded-xl">
                    <form id="booking-form" className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-6">
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
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <input 
                                type="tel" 
                                placeholder="Your Phone" 
                                className="glass w-full p-3 rounded-lg" 
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                            <input 
                                type="date" 
                                className="glass w-full p-3 rounded-lg" 
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                            />
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <input 
                                type="time" 
                                className="glass w-full p-3 rounded-lg" 
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                required
                            />
                            <select 
                                className="glass w-full p-3 rounded-lg" 
                                value={guests}
                                onChange={(e) => setGuests(e.target.value)}
                                required
                            >
                                <option value="" disabled>Number of Guests</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5+</option>
                            </select>
                        </div>
                        <textarea 
                            placeholder="Special Requests (Optional)" 
                            rows="4" 
                            className="glass w-full p-3 rounded-lg" 
                            value={specialRequests}
                            onChange={(e) => setSpecialRequests(e.target.value)}
                        ></textarea>
                        <button 
                            type="submit" 
                            className="bg-yellow-400 text-black px-8 py-3 rounded-full hover:bg-yellow-300 transition w-full"
                        >
                            Book Now
                        </button>
                        {error && <div className="text-red-500">{error}</div>}
                        {success && <div className="text-green-500">{success}</div>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default BookingForm;