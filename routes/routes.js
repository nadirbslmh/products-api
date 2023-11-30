import express from "express";
import ProductController from "../controllers/product.js";
import validate from "../middlewares/validation.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("", auth.jwtMiddleware, ProductController.getProducts);
router.get("/:id", auth.jwtMiddleware, ProductController.getProductByID);
router.post("", validate, auth.jwtMiddleware, ProductController.createProduct);
router.put(
  "/:id",
  validate,
  auth.jwtMiddleware,
  ProductController.updateProduct
);
router.delete("/:id", auth.jwtMiddleware, ProductController.deleteProduct);

export default router;
