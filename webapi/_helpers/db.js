// Import necessary modules
const config = require('config.json'); // Load the configuration file
const mongoose = require('mongoose'); // Import Mongoose for MongoDB interactions

// Function to connect to MongoDB
async function connectDB() {
    try {
        // Attempt to connect to MongoDB using the provided URI
        await mongoose.connect(process.env.MONGODB_URI || config.connectionString, {
            useNewUrlParser: true, // Use the new URL parser for MongoDB connection
            useUnifiedTopology: true, // Enable the unified topology layer for better connection management
        });
        console.log('MongoDB connected successfully'); // Log a success message
    } catch (error) {
        // Catch and log any connection errors
        console.error('MongoDB connection error:', error);
    }
}

// Call the connectDB function to initiate the connection
connectDB();

// Set Mongoose to use global promises
mongoose.Promise = global.Promise;

// Export the User model for use in other parts of the application
module.exports = {
    User: require('../users/user.model'), // Import the User model
};
