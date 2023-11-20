const express = require("express");
const app = express();

// MongoDB connection string
const mongoUri = "mongodb+srv://5000twister:M3ga0rangemongo@atlascluster.bzlpbls.mongodb.net/?retryWrites=true&w=majority";

// Connect to MongoDB
const { MongoClient } = require("mongodb");
const client = new MongoClient(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const startServer = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    // Define the route to save form submissions
    app.post("/submit-form", async (req, res) => {
      const { name, contact, info, commitment, updates } = req.body;

      // Save the form submission to the MongoDB collection

      res.json({ success: true });
    });

    // Start the server
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
};

// Call startServer to start the Express server
startServer();