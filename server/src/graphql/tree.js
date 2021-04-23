import { gql } from "apollo-server-express";
import { treedb } from "../models/tree";

export const Tree = gql`
  type Tree {
    id: ID!
    value: String!
    price: Int
    username: String!
  }
  type Query {
    getTree: [Tree]
  }
`;

export const TreeResolver = {
  Query: {
    getTree: async () => {
      try {
        const currentTree = await treedb.find();
        return currentTree;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
