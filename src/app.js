// app.js
const express = require('express');
const cors = require('cors');
const stakeRoutes = require('./modules/stake/stake.routes');
const outcomeDataRoutes = require('./modules/outcomeData/outcomeData.routes');
const userRoutes = require('./modules/users/users.routes');
const authMiddleware = require('./middleware/authentication.js'); 



const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors({
    
    origin: '*', // Allow all origins (consider specifying your frontend origin for production)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-shop-id']
}));

app.options('*', cors());


app.use('/api/v1/outcomeData',authMiddleware, outcomeDataRoutes);
app.use('/api/v1/stakes',authMiddleware , stakeRoutes);
app.use('/api/v1/users', userRoutes);

module.exports = app;

