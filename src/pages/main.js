import React from "react";
import { SideMenu } from "../components";
import { SideMenuContainer } from "../containers/side-menu";
import { Tree } from "../containers/tree";

export function Main() {
  return (
    <>
      <SideMenuContainer />
      <Tree />
    </>
  );
}
