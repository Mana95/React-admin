const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('_helpers/db');

// Create the user schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true, // Ensures email uniqueness
    },
    hash: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        default: true, // Default to active
    },
}, {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
});

// Set toJSON option for better response formatting
userSchema.set('toJSON', { virtuals: true });

// Export the model
module.exports = mongoose.model('User', userSchema);
