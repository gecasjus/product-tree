import { gql } from "apollo-boost";

export const typeDefs = gql`
  extend type Mutation {
    ToggleTree: Boolean!
  }
`;

const GET_TREE = gql`
  {
    Tree @client
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
