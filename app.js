require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT;


// routes to controller folder
const homepageController = require('./src/controllers/homepage.controller');

app.use(express.json());

// mongoose setup
const mongoose = require("mongoose");
const MONGO = process.env.MONGODataBase;
const db = mongoose.connection;
mongoose.connect(`${MONGO}/chessboard-BE`);
db.once('open', ()=> {
    console.log(`Connected: ${MONGO}`);
})

//app.uses
app.use("/", homepageController);



// startup backend
app.listen(PORT, ()=> {
    console.log(`Server is on Port: ${PORT}`);
});