const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017')
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

// Menu Item Schema
const menuItemSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    category: String,
    description: String,
    image: String,
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

// Message Schema
const messageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// Booking Schema
const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    guests: { type: Number, required: true },
    specialRequests: { type: String }
});

const Booking = mongoose.model('Booking', bookingSchema);

// API Endpoints
app.get('/api/menu', async (req, res) => {
    try {
        const items = await MenuItem.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching menu items' });
    }
});

app.post('/api/menu', async (req, res) => {
    const menuItem = new MenuItem(req.body);
    try {
        const savedItem = await menuItem.save();
        res.status(201).json(savedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Handle contact messages
app.post('/api/contact', async (req, res) => {
    const message = new Message(req.body);
    try {
        const savedMessage = await message.save();
        res.status(201).json(savedMessage);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Handle bookings
app.post('/api/bookings', async (req, res) => {
    const booking = new Booking(req.body);
    try {
        const savedBooking = await booking.save();
        res.status(201).json(savedBooking);
    } catch (err) {
        console.error('Error saving booking:', err); // Log the error for debugging
        res.status(400).json({ message: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});