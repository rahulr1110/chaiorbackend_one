const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("hiii rahul ravindran");
});
app.listen(process.env.PORT, () => {
  console.log("hiiiiii");
});
