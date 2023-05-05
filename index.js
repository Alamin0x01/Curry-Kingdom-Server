const express = require("express");
const port = process.env.PORT || 8000;
const cors = require("cors");
const app = express();
const chefs = require("./data/chefs.json");
const items = require("./data/items.json");

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello server running" });
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  const specificDestination = chefs.find((spDes) => spDes.id == id) || {};
  res.send(specificDestination);
});

app.get("/slides", (req, res) => {
  res.send(items);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
