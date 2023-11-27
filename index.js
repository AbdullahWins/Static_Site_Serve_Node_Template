const express = require("express");
const path = require("path");

// Create the Express app
const app = express();

//Define the port
const PORT = process.env.PORT || 3000;

// Serve static files from the "build" directory
app.use("/", express.static(path.join(__dirname, "build")));

// Handle all routes under "/site" and serve the "index.html" file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Handle API requests under "/api"
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
