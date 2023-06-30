import { Router } from "express";

import prisma from "../db.js";

const router = Router();

router.get("/products", async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

// ----- Create New Product
router.post("/products", async (req, res) => {
  const newProduct = await prisma.product.create({
    data: req.body,
  });
  res.json(newProduct);
});

// ----- Get Product by Id
router.get("/products/:id", async (req, res) => {
  const id = +req.params.id;
  const productById = await prisma.product.findUnique({
    where: {
      id,
    },
  });
  res.json(productById)
});

export default router;
