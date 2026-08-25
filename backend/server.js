const express = require("express");
const app = express();

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  // root route http://localhost:5001/
  res.send("Hello, World!");
});

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
