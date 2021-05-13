import { gql } from "@apollo/client";

export const GET_TREE = gql`
  query getTree($treeId: Int) {
    getTree(treeId: $treeId) {
      id
      value
      price
      username
      ancestors
      treeId
      parent
    }
  }
`;
