
require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose')

const uri = process.env.MONGO_URI;    
console.log(uri)  
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then((resuult) => console.log("Connected to MongoDB Database"))
.catch((err) => console.log(err));

const carRoutes = require('./routes/carRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Basic route
app.use("/", carRoutes)
app.use("/", userRoutes)
app.use("/", authRoutes)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});