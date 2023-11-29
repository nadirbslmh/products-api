import AuthRepository from "../repositories/auth.js";

export default class AuthService {
  static async register(authRequest) {
    return await AuthRepository.register(authRequest);
  }

  static async login(authRequest) {
    return await AuthRepository.login(authRequest);
  }
}
