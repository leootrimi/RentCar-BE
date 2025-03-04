
require('dotenv').config()
const express = require('express');
const carRoutes = require('./routes/carRoutes');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Basic route
app.use("/cars", carRoutes)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});