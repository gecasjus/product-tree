import React, { useState, useEffect } from "react";
import { SideMenu } from "../components";
import { SideMenuContainer } from "../containers/side-menu";
import { Tree } from "../containers/tree";
import { useQuery, gql } from "@apollo/client";
import cloneDeep from "lodash.clonedeep";

export function Main({ id }) {
  const { loading, data, error } = useQuery(GET_TREE, {
    variables: { treeId: id },
  });
  const [modified, setModified] = useState([]);

  useEffect(() => {
    if (data) {
      const cloned = cloneDeep(data.getTree);
      const idMapping = cloned.reduce((acc, el, i) => {
        acc[el.id] = i;
        return acc;
      }, {});
      let root;
      cloned.forEach((el) => {
        // Handle the root element
        if (el.parent === null) {
          root = el;
          return;
        }
        // Use our mapping to locate the parent element in our data array
        const parentEl = cloned[idMapping[el.parent]];
        // Add our current el to its parent's `children` array
        parentEl.children = [...(parentEl.children || []), el];
      });
      setModified(root);
    }
  }, [data]);

  return (
    <>
      <Tree data={modified} loading={loading} />
    </>
  );
}
const GET_TREE = gql`
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
