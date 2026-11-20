const mongoose = require("mongoose")
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("mongodb running successfully");
})
.catch((err) => {
    console.log("mongodb not connected",err)
})

app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
})  
