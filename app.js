const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello, World from Shule Zhu, I want to tell everyone that I love CCY!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
