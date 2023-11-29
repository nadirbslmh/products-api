import { PrismaClient } from "@prisma/client";
import { genSalt, hash, compare } from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

const prisma = new PrismaClient();

export default class AuthRepository {
  static async register(authRequest) {
    try {
      const { email, password } = authRequest;

      const salt = await genSalt(10);
      const hashedPassword = await hash(password, salt);

      const result = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
        },
      });

      return result;
    } catch (error) {
      return error;
    }
  }

  static async login(authRequest) {
    try {
      const { email, password } = authRequest;

      const user = await prisma.user.findUnique({
        where: { email: email },
      });

      const isPasswordMatch = await compare(password, user.password);

      if (!isPasswordMatch) {
        throw Error("email or password is invalid");
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      const token = jsonwebtoken.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: 360000,
      });

      return token;
    } catch (error) {
      return error;
    }
  }
}
