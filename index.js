const express = require("express");
const app = express();
require("dotenv").config();

const data = {
  name: "rahul",
  surname: "ravindran",
};

app.get("/", (req, res) => {
  res.send("hiii rahul ravindran");
});
app.get("/data", (req, res) => {
  res.json(data);
});
app.listen(process.env.PORT, () => {
  console.log("hiiiiii");
});
