// Importing the required modules
import express from "express"; // Importing Express.js, a framework for building web applications
import bodyParser from "body-parser"; // Importing body-parser middleware to handle URL-encoded data
import dotenv from "dotenv"; // Importing dotenv to manage environment variables

// Initialize the Express application
const app = express();

// Load environment variables from a .env file into process.env
dotenv.config();

// Set the port for the server to listen on, defaulting to 3000 if not defined in .env
const port = process.env.PORT || 3000;

// Middleware to parse incoming JSON data in request bodies
app.use(express.json());

// Middleware to parse URL-encoded data (e.g., form submissions)
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route for the root URL ('/')
// This route responds with a simple "Hello World!" message
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Define a route for user registration
// This POST route listens at '/api/v1/user/register'
app.post("/api/v1/user/register", (req, res) => {
  // Destructure `name`, `email`, and `password` from the request body
  const { name, email, password } = req.body;

  // Send a JSON response indicating success and echoing back the submitted user details
  res.status(200).json({
    success: true,
    message: "User registered successfully",
    user: { name, email, password },
  });
});

// Start the server and make it listen on the specified port
// Log a message to the console indicating the server is running
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
