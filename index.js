import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const app = express();

const port = 3000;

app.use(express.json({ extended: false }));

app.get("/api/v1/products", async (req, res) => {
  const products = await prisma.product.findMany();

  res.json({
    message: "all products",
    data: products,
  });
});

app.get("/api/v1/products/:id", async (req, res) => {
  const { id } = req.params;

  const product = await prisma.product.findUnique({
    where: { id: Number(id) },
  });

  res.json({
    message: "product found",
    data: product,
  });
});

app.post("/api/v1/products", async (req, res) => {
  const { name, description, price, quantity } = req.body;

  const result = await prisma.product.create({
    data: {
      name,
      description,
      price,
      quantity,
    },
  });

  res.status(201).json({
    message: "product created",
    data: result,
  });
});

app.put("/api/v1/products/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description, price, quantity } = req.body;

  const product = await prisma.product.update({
    where: { id: Number(id) },
    data: {
      name,
      description,
      price,
      quantity,
    },
  });

  res.json({
    message: "product updated",
    data: product,
  });
});

app.delete("/api/v1/products/:id", async (req, res) => {
  const { id } = req.params;

  await prisma.product.delete({
    where: { id: Number(id) },
  });

  res.json({
    message: "product deleted",
  });
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
