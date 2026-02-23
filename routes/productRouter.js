import express from "express";
import { getProducts, postProducts } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/", getProducts);
productRouter.post("/", postProducts);

export default productRouter;