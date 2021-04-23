import React, { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { GET_TREE } from "../graphql/queries";

export function Tree() {
  const { loading, error, data } = useQuery(GET_TREE);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <span>i'm a tree</span>;
}
