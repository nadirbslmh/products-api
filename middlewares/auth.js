import { body } from "express-validator";
import jsonwebtoken from "jsonwebtoken";

const requestValidation = [
  body("email", "email must be valid value").isEmail(),
  body("password", "password must greater than or equal 6 characters").isLength(
    {
      min: 6,
    }
  ),
];

const jwtMiddleware = (req, res, next) => {
  try {
    const token = req.get("Authorization").split(" ")[1];

    if (!token) {
      res.status(401).json({
        message: "access denied",
      });
    }

    const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({
      message: "invalid or expired JWT",
    });
  }
};

export default {
  requestValidation,
  jwtMiddleware,
};
