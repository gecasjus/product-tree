import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import { MONGODB } from "../config.js";
import express from "express";

import { schema } from "./graphql/schema";

const app = express();

const server = new ApolloServer({ schema, context: ({ req }) => ({ req }) });

server.applyMiddleware({ app });

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    return app.listen({ port: 4000 }, () =>
      console.log(`${server.graphqlPath}`)
    );
  })
  .catch((err) => console.log(err));
