import { body } from "express-validator";

const validate = [
  body("name", "name is required").notEmpty(),
  body("description", "description is required").notEmpty(),
  body("price", "price must be valid value").isInt({ min: 1 }),
  body("quantity", "quantity must be valid value").isInt({ min: 0 }),
];

export default validate;
