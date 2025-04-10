// require("dotenv").config();
// const express = require("express");
// const { MongoClient } = require("mongodb");
// const cors = require("cors");

// const app = express();
// const port = 3001; // Choose a port for the backend

// // MongoDB connection URI and client
// const uri = process.env.MONGO_URI;
// const client = new MongoClient(uri);
// let gadgetsCollection;

// // Establish connection to MongoDB and set up the collection
// async function connectDB() {
//   try {
//     await client.connect(); // Connect to MongoDB
//     const db = client.db("Doraemon");
//     gadgetsCollection = db.collection("Gadgets");
//     console.log("Connected to MongoDB successfully!");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error.message);
//     process.exit(1); // Exit the process if DB connection fails
//   }
// }

// // Enable CORS for communication between React and Express
// app.use(cors());

// // REST endpoint to fetch all gadgets
// app.get("/api/gadgets", async (req, res) => {
//   try {
//     // Fetch all gadgets
//     const gadgets = await gadgetsCollection.find({}).toArray();
//     console.log(gadgets);

//     // Send the products as JSON
//     res.json(gadgets);
//   } catch (error) {
//     console.error("Error fetching products:", error.message);
//     res.status(500).json({ error: "Failed to fetch gadgets." });
//   }
// });

// // Start the Express server
// app.listen(port, async () => {
//   await connectDB(); // Establish MongoDB connection before starting the server
//   console.log(`Backend server is running on http://localhost:${port}`);
// });
