import React from "react";
import { Container, Title, RenderTree } from "./styles/side-menu";

export default function SideMenu({ children, ...otherProps }) {
  return <Container {...otherProps}>{children}</Container>;
}

SideMenu.Title = function SideTitle({ children, ...otherProps }) {
  return <Title {...otherProps}>{children}</Title>;
};

SideMenu.RenderTree = function SideRenderTree({ children, ...otherProps }) {
  return <RenderTree {...otherProps}>{children}</RenderTree>;
};
