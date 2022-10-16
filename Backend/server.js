const express = require("express");

const app = express();
const port = process.env.PORT || 5000;
require("./db/conn");
const register = require("./route/userRoute");
const tr=require('./route/trainerRoute')

app.get("/", (req, res) => {
  res.send("Server started");
});
app.use(express.json());
app.use("/api/users/", register);
app.use("/api/trainers",tr);

app.listen(port, () => {
  console.log("port on 5000");
});
