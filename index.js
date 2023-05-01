const express = require("express");
const port = process.env.PORT || 8000;
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello server running" });
});

// app.listen(9000, () => {
//   console.log("server is running on port 5000");
// });
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
