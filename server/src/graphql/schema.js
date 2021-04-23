import { makeExecutableSchema } from "apollo-server-express";
import { Tree, TreeResolver } from "./tree";
import { User, UserResolver } from "./user";

const resolvers = {
  Query: {
    ...TreeResolver.Query,
  },
  Mutation: {
    ...UserResolver.Mutation,
  },
};

export const schema = makeExecutableSchema({
  typeDefs: [Tree, User],
  resolvers: [resolvers],
});
