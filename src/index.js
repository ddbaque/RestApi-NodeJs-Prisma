import express from "express";

import productsRoutes from "./routes/products.routes.js";
import categoriesRoutes from "./routes/categories.routes.js";

const app = express();

const PORT = 3001;

app.get("/", (req, res) => {
  res.send("hola puta");
});

app.use(express.json());

// ------ Routes -------
app.use("/api", categoriesRoutes);
app.use("/api", productsRoutes);

app.listen(PORT, () => {
  console.log(`server listen on port ${PORT}`);
});
