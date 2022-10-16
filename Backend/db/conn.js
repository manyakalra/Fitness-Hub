const mongoose = require("mongoose");

const url =
  "mongodb+srv://Raghav:raghav123@backbecherfitness.pkauy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then(() => {
    console.log("MongoDB Connected.....");
  })
  .catch((e) => {
    console.log(`Connection Failed...`);
  });
