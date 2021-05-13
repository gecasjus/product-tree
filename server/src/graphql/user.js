import { gql, UserInputError } from "apollo-server-express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userdb } from "../models/user";
import { SECRET_KEY } from "../../config";

import { validateRegister, validateLogin } from "../utils/validators";

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    SECRET_KEY,
    { expiresIn: "1h" }
  );
};

export const UserResolver = {
  Mutation: {
    async login(_, { username, password }) {
      const { errors, valid } = validateLogin(username, password);
      const user = await userdb.findOne({ username });

      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }

      if (!user) {
        errors.general = "User not found";
        throw new UserInputError("User not found", { errors });
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        errors.general = "Wrong credentials";
        throw new UserInputError("Wrong credentials", { errors });
      }
      const token = generateToken(user);

      return {
        ...user._doc,
        id: user._id,
        token,
      };
    },
    async register(
      _,
      { registerInput: { username, password, confirmPassword } }
    ) {
      const { errors, valid } = validateRegister(
        username,
        password,
        confirmPassword
      );
      if (!valid) {
        throw new UserInputError("Errors", {
          errors,
        });
      }

      const user = await userdb.findOne({ username });
      if (user) {
        throw new UserInputError("User already exists", {
          errors: {
            username: "Username already exists",
          },
        });
      }
      password = await bcrypt.hash(password, 12);
      const newUser = new userdb({
        username,
        password,
      });
      const res = await newUser.save();

      const token = generateToken(res);

      return {
        ...res._doc,
        id: res._id,
        token,
      };
    },
  },
};
