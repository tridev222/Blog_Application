const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const connectDB = async () => {
    try {
        const dbPassword = process.env.DB_PASSWORD;
        await mongoose.connect(`mongodb+srv://rishisrmscet:${dbPassword}@cluster0.qncw1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports= connectDB;