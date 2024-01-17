const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");

const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://mukesh:mukesh@cluster0.sbskodh.mongodb.net/").then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connectin to mongoDb",error);
  });

  app.listen(port, () => {
    console.log("Server is running on port 3000");
  });