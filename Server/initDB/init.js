const express = require("express");
const app = express();
const mongoose = require("mongoose");
const initData = require("../initDB/data")
const Listing = require("../models/listingSchema")
require('dotenv').config();

const dbURL = process.env.MONGODB_URL;

main()
  .then(() => {
    console.log("Connected with DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbURL);
}

const initDB = async () =>{
    await Listing.insertMany(initData);
    console.log("data was initalized")
};

initDB();