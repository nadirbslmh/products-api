import { validationResult } from "express-validator";
import AuthService from "../services/auth.js";

export default class AuthController {
  static async register(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
      }

      const result = await AuthService.register(req.body);

      res.status(201).json({
        message: "user created",
        data: {
          id: result.id,
          email: result.email,
        },
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  static async login(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
      }

      const token = await AuthService.login(req.body);

      res.json({
        message: "login success",
        token,
      });
    } catch (error) {
      console.error(error.message);
    }
  }
}
