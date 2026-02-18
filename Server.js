const express = require("express");
const cors = require("cors");
const products = require("./data");

const app = express();
app.use(cors());

app.get("/api/products", (req, res) => {
  res.json(products);
});

// IMPORTANT for Render
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
