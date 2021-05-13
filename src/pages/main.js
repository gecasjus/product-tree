import React, { useState, useEffect } from "react";

import { GET_TREE } from "../graphql/queries/queries";

import { Tree } from "../containers/tree";
import { useQuery } from "@apollo/client";
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
        if (el.parent === null) {
          root = el;
          return;
        }
        const parentEl = cloned[idMapping[el.parent]];
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
