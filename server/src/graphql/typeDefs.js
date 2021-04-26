import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID!
    token: String!
    username: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
  }
  type Tree {
    id: ID!
    value: String!
    price: Int
    username: String!
    parent: String
  }
  input TreeInput {
    id: ID!
    value: String!
    price: Int
    username: String!
    parent: String
  }
  type Node {
    id: ID!
    parent: String!
    tree: String!
    value: String!
    price: Int
  }
  input NodeInput {
    id: ID!
    parent: String!
    tree: String!
    value: String!
    price: Int
  }
  type Query {
    getTree: [Tree]
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createTree(tree: TreeInput): Tree!
    createNode(node: NodeInput): Node
  }
`;
