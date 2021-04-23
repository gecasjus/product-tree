import { gql } from "apollo-server-express";
import bcryp from "bcrypt";
import jwt from "jsonwebtoken";
import { userdb } from "../models/user";
import { SECRET_KEY } from "../../config";

export const User = gql`
  type User {
    id: ID!
    token: String!
    username: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
  }
`;

export const UserResolver = {
  Mutation: {
    async register(
      _,
      { registerInput: { username, password, confirmPassword } },
      context
    ) {
      password = await bcryp.hash(password, 12);
      const newUser = new userdb({
        username,
        password,
      });
      const res = await newUser.save();

      const token = jwt.sign(
        {
          id: res.id,
          username: res.username,
        },
        SECRET_KEY,
        { expiresIn: "1h" }
      );
      return {
        ...res._doc,
        id: res._id,
        token,
      };
      // VALIDATE USER DATA
      // MAKE SURE USER DOESNT ALREADY EXIST
    },
  },
};
