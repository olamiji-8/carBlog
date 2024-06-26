const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require('cors');
const dbConnect = require("./config/dbConnect");
const Router = require("./routes/blogRoute");


const PORT = process.env.PORT || 4000

dbConnect();

// Middleware to parse JSON bodies
app.use(express.json());

app.use(cors());

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})

 app.use('/', Router);