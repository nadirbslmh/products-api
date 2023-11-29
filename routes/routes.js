import express from "express";
import ProductController from "../controllers/product.js";
import validate from "../middlewares/validation.js";

const router = express.Router();

router.get("", ProductController.getProducts);
router.get("/:id", ProductController.getProductByID);
router.post("", validate, ProductController.createProduct);
router.put("/:id", validate, ProductController.updateProduct);
router.delete("/:id", ProductController.deleteProduct);

export default router;
