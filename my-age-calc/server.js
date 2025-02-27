const express = require("express");
const app = express();
const port = 5000; // Or any other port

// Route to handle requests
app.get("/api", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
