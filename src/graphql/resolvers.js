import { gql } from "@apollo/client";

import { GET_TREE } from "./queries";

export const typeDefs = gql`
  extend type Mutation {
    ToggleTree: Boolean!
  }
`;

export const resolvers = {
  Mutation: {
    toggleTree: (_root, _args, { cache }) => {
      const { Tree } = cache.readQuery({
        query: GET_TREE,
      });
      cache.writeQuery({
        query: GET_TREE,
        data: { Tree: !Tree },
      });
      return !Tree;
    },
  },
};
