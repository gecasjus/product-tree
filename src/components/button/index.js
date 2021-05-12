import React from "react";
import { CustomButton, Container, Inner, Stripe } from "./styles/button";

export default function Button({ children, ...restProps }) {
  return <CustomButton {...restProps}>{children}</CustomButton>;
}

Button.Container = function ButtonContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Button.Inner = function ButtonInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

Button.Stripe = function ButtonStripe({ children, ...restProps }) {
  return <Stripe {...restProps}>{children}</Stripe>;
};
