const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("_helpers/db");
const config = require("config.json"); // Ensure you have a config file for the secret
const User = db.User;

module.exports = {
  authenticate,
};

async function authenticate({ username, password }) {
  // Check if the user exists and is active
  const user = await User.findOne({ username });
  console.log(username);
  // If the user does not exist
  if (!user) {
    // Create a new user record (if needed, adjust according to your requirements)
    const newUser = new User({
      username, // Update to use username
      hash: bcrypt.hashSync(password, 10), // Hash the password
      active: true, // Set to true or handle accordingly
    });
    await newUser.save();
    return {
      errorStatus: false,
      message: "New user created successfully. You can now log in.",
      user: newUser, // Return the newly created user if needed
    };
  }

  // If the user exists but is not activated
  if (!user.active) {
    return {
      errorStatus: true,
      message: "User is not activated, please contact the admin department.",
    };
  }

  // If the user exists and is active, check the password
  if (bcrypt.compareSync(password, user.hash)) {
    const { hash, ...userWithoutHash } = user.toObject();
    const token = jwt.sign({ sub: user.id }, config.secret);
    return {
      ...userWithoutHash,
      token,
      errorStatus: false,
      message: "User authenticated successfully.", // Add success message
    };
  } else {
    // If the password is incorrect
    return {
      errorStatus: true,
      message: "Incorrect password.",
    };
  }
}


