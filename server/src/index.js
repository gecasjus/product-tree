import http from "http";
import { ApolloServer } from "apollo-server-express";
import { PubSub } from "graphql-subscriptions";
import mongoose from "mongoose";
import { MONGODB } from "../config.js";
import express from "express";

import { schema } from "./graphql/schema";

const app = express();

const pubsub = new PubSub();

const server = new ApolloServer({
  schema,
  context: ({ req }) => ({ req, pubsub }),
});

server.applyMiddleware({ app });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    return httpServer.listen({ port: 4000 }, () =>
      console.log(`${server.graphqlPath}`)
    );
  })
  .catch((err) => console.log(err));
