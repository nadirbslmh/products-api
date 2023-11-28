const express = require("express");
const app = express();
const port = 3000;

app.use(express.json({ extended: false }));

app.get("/api/v1/products", (req, res) => {
  res.send({
    message: "all products",
    data: ["apple", "coffee", "milk"],
  });
});

app.get("/api/v1/products/:id", (req, res) => {
  res.send({
    data: req.params.id,
  });
});

app.post("/api/v1/products", (req, res) => {
  res.send({
    data: req.body,
  });
});

app.put("/api/v1/products/:id", (req, res) => {});

app.delete("/api/v1/products/:id", (req, res) => {});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
