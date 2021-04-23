import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloProvider } from "@apollo/client/react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GlobalStyles } from "./global.styles";
import { resolvers, typeDefs } from "./graphql/resolvers";
import { GET_TREE } from "./graphql/queries";

const client = new ApolloClient({
  link: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  typeDefs,
  resolvers,
});

client.writeQuery({
  query: GET_TREE,
  data: {
    Tree: false,
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
