import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-boost";
import { GlobalStyles } from "./global.styles";
import { resolvers, typeDefs } from "./graphql/resolvers";

const httplLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});
const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httplLink,
  cache,
  typeDefs,
  resolvers,
});

client.writeData({
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
