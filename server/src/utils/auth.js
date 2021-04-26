import { AuthenticationError } from "apollo-server-express";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../../config";

export const verifyAuth = (context) => {
  //context = {... headers}
  const authHeader = context.req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split("Bearer ")[1];
    if (token) {
      try {
        const user = jwt.verify(token, SECRET_KEY);
        return user;
      } catch (err) {
        throw new AuthenticationError("Invalid/Expired token");
      }
    }
    throw new Error("Authentication must be 'Bearer [token]");
  }
  throw new Error("Authentication header must be provided");
};
