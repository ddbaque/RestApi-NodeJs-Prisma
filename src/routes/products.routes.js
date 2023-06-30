import { Router } from "express";

import prisma from "../db.js";

const router = Router();

//! --------------------- Get All Products -----------------------
router.get("/products", async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

//! --------------------- Get Product by Id ---------------------------------
router.get("/products/:id", async (req, res) => {
  const id = +req.params.id;
  const productById = await prisma.product.findUnique({
    where: {
      id,
    },
  });
  res.json(productById);
});

//! ----------------------- Create New Product ------------------------------
router.post("/products", async (req, res) => {
  const newProduct = await prisma.product.create({
    data: req.body,
  });
  res.json(newProduct);
});

//! ----------------------- Update Product By Id ----------------------------
router.put("/products/:id", async (req, res) => {
  const id = +req.params.id;
  const productUpdated = await prisma.product.update({
    where: {
      id,
    },
    data: req.body,
  });
  res.json(productUpdated);
});

//! ---------------------- Delete Product By Id -----------------------------
router.delete("/products/:id", async (req, res) => {
  const { id } = +req.params.id;

  const product = await prisma.product.findFirst({
    where: {
      id,
    },
  });
  const name = product.name
  await prisma.product.delete({
    where: {
      name,
    }
  })

  res.json(product);
});

export default router;
