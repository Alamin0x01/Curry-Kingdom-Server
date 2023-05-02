const express = require("express");
const port = process.env.PORT || 8000;
const cors = require("cors");
const app = express();
app.use(cors());
const chefData = require("./data/chef.json");
const recipesData = require("./data/recipes.json");

app.get("/", (req, res) => {
  res.json({ message: "Hello server running" });
});

app.get("/chefData", (req, res) => {
  res.send(chefData);
});
app.get("/recipesData", (req, res) => {
  res.send(recipesData);
});
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
