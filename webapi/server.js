// Require the rootpath module to resolve module paths
require("rootpath")();

// Import necessary middleware and libraries
const cors = require("cors"); // Middleware for enabling Cross-Origin Resource Sharing
const express = require("express"); // Web framework for Node.js
const bodyParser = require("body-parser"); // Middleware to parse incoming request bodies

// Create an instance of an Express application
var app = express();

// Enable CORS for all routes
app.use(cors());

// Configure bodyParser to handle URL-encoded and JSON payloads
app.use(bodyParser.urlencoded({ extended: false })); // Parse URL-encoded data
app.use(bodyParser.json({ limit: "100mb" })); // Parse JSON data with a limit of 100MB

// Set up a route for handling user-related requests
// The users.controller.js file will define the logic for handling requests to /users
app.use("/users", require("./users/user.controller"));

// Start the Express server and listen on port 3000
app.listen("5000", function () {
  // Log a message indicating the server is running
  console.log("running on 5000...");
});
