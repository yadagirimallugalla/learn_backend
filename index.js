const express = require("express");
require("dotenv").config();
const app = express();
const port = 4000 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h2>Phone Number: 8686200686</h2>");
});
app.listen(port, () => {
  console.log("App is running on the port", port);
});
