// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const path = require('path'); // REMOVE THIS LINE (no longer needed for static serving here)

const app = express();
const PORT = process.env.PORT || 5000; // Render will set this environment variable

// Middleware
app.use(bodyParser.json()); // To parse JSON request bodies
app.use(cors()); // Enable CORS for all origins (for development)
// REMOVED: app.use(express.static(...)); - Render will serve frontend static files directly or via a Static Site service

// Basic API route for testing
app.get('/api', (req, res) => { // Changed to '/api' to avoid conflict with '/' for static files
    res.send('Welcome to the Business Website Backend API!');
});

// User routes (will be defined in a separate file later for modularity)
app.post('/api/register', (req, res) => {
    console.log('Registration request received:', req.body);
    // Placeholder for user registration logic
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Please enter all fields' });
    }
    res.status(200).json({ message: 'User registered successfully (placeholder)', user: { username, email } });
});

app.post('/api/login', (req, res) => {
    console.log('Login request received:', req.body);
    // Placeholder for user login logic
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Please enter all fields' });
    }
    // In a real app, you would verify credentials against a database
    if (email === 'test@example.com' && password === 'password123') {
        res.status(200).json({ message: 'Login successful (placeholder)', token: 'mock-jwt-token' });
    } else {
        res.status(401).json({ message: 'Invalid credentials (placeholder)' });
    }
});

// Protected admin route (requires authentication later)
app.get('/api/admin-dashboard', (req, res) => {
    // In a real application, you would check for authentication token here
    res.status(200).json({ message: 'Welcome to the Admin Dashboard!' });
});

// REMOVED: app.get('*', ...) - Render will handle serving index.html for the frontend

// Start the server
app.listen(PORT, () => {
    console.log(Backend server running on port ${PORT});
});
