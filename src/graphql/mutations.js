import { gql } from "@apollo/client";

export const RENDER_TREE = gql`
  mutation ToggleTree {
    toggleTree @client
  }
`;

export const SEND_TREE = gql`
  mutation SendTree {
    sendTree
  }
`;
