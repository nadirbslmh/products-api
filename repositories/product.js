import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class ProductRepository {
  static async getProducts() {
    try {
      const products = await prisma.product.findMany();

      return products;
    } catch (error) {
      return error;
    }
  }

  static async getProductByID(id) {
    try {
      const product = await prisma.product.findUnique({
        where: { id: Number(id) },
      });

      return product;
    } catch (error) {
      return error;
    }
  }

  static async createProduct(productRequest) {
    try {
      const { name, description, price, quantity } = productRequest;

      const result = await prisma.product.create({
        data: {
          name,
          description,
          price,
          quantity,
        },
      });

      return result;
    } catch (error) {
      return error;
    }
  }

  static async updateProduct(productRequest, id) {
    try {
      const { name, description, price, quantity } = productRequest;

      const product = await prisma.product.update({
        where: { id: Number(id) },
        data: {
          name,
          description,
          price,
          quantity,
        },
      });

      return product;
    } catch (error) {
      return error;
    }
  }

  static async deleteProduct(id) {
    try {
      await prisma.product.delete({
        where: { id: Number(id) },
      });
    } catch (error) {
      return error;
    }
  }
}
