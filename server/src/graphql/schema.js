import { makeExecutableSchema } from "apollo-server-express";
import { TreeResolver } from "./tree";
import { UserResolver } from "./user";
import { typeDefs } from "./typeDefs";

const resolvers = {
  Query: {
    ...TreeResolver.Query,
  },
  Mutation: {
    ...UserResolver.Mutation,
    ...TreeResolver.Mutation,
  },
  Subscription: {
    ...TreeResolver.Subscription,
  },
};

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
