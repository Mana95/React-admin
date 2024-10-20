// Import necessary modules
const express = require('express');
const router = express.Router();
const userService = require('./user.service');

// Define routes

/**
 * Authenticate a user.
 * @route POST /authenticate
 * @param {string} email.body.required - User's email
 * @param {string} password.body.required - User's password
 * @returns {Object} 200 - User authentication details
 * @returns {Error}  401 - Invalid credentials
 */
router.post('/authenticate', authenticate);

module.exports = router;

/**
 * Authenticate function to validate user credentials.
 * This function checks the provided email and password against the database.
 */
async function authenticate(req, res, next) {
    try {
        // Extract email and password from request body
        const { username, password } = req.body;

        // Call the userService's authenticate method
        const result = await userService.authenticate({ username, password });

        // Check if there was an error during authentication
        if (result.errorStatus) {
            return res.status(401).json({ message: result.message });
        }

        // Successful authentication
        return res.status(200).json(result);
    } catch (error) {
        // Handle unexpected errors
        return res.status(500).json({ message: 'An error occurred during authentication.', error: error.message });
    }
}
