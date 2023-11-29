import { validationResult } from "express-validator";
import ProductService from "../services/product.js";

export default class ProductController {
  static async getProducts(req, res) {
    try {
      const products = await ProductService.getProducts();

      res.json({
        message: "all products",
        data: products,
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  static async getProductByID(req, res) {
    try {
      const { id } = req.params;

      const product = await ProductService.getProductByID(id);

      res.json({
        message: "product found",
        data: product,
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  static async createProduct(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
      }

      const result = await ProductService.createProduct(req.body);

      res.status(201).json({
        message: "product created",
        data: result,
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  static async updateProduct(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
      }

      const { id } = req.params;

      const product = await ProductService.updateProduct(req.body, id);

      res.json({
        message: "product updated",
        data: product,
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  static async deleteProduct(req, res) {
    try {
      const { id } = req.params;

      await ProductService.deleteProduct(id);

      res.json({
        message: "product deleted",
      });
    } catch (error) {
      console.error(error.message);
    }
  }
}
