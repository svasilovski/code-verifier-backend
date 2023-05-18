const express = require("express");
const dotenv = require("dotenv");

// configuration the .env file
dotenv.config();

// Create Express APP
const app = express();
const port = process.env.PORT || 8000;

// Define the first Route APP
app.get("/", (req, res) => {
	// send Hello World
	res.send("Welcome to APP Express + TS + Swagger + Mongoose");
});

// Execute APP and Listen Request to PORT
app.listen(port, () => {
	console.log(`EXPRESS SERVER: Running at http://localhost:${port}`);
});

