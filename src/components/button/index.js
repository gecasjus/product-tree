import React from "react";
import {
  CustomButton,
  Container,
  Inner,
  Stripe,
  Path,
  StripeWrapper,
  LayoutWrapper,
} from "./styles/button";

export default function Button({ children, ...restProps }) {
  return <CustomButton {...restProps}>{children}</CustomButton>;
}

Button.Container = React.forwardRef((props, ref) => (
  <Container ref={ref} {...props}>
    {props.children}
  </Container>
));

Button.Path = function ButtonPath({ children, ...restProps }) {
  return <Path {...restProps}>{children}</Path>;
};

Button.Inner = function ButtonInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

Button.StripeWrapper = function ButtonStripeWrapper({
  children,
  ...restProps
}) {
  return <StripeWrapper {...restProps}>{children}</StripeWrapper>;
};

Button.LayoutWrapper = function ButtonLayoutWrapper({
  children,
  ...restProps
}) {
  return <LayoutWrapper {...restProps}>{children}</LayoutWrapper>;
};

Button.Stripe = function ButtonStripe({ children, ...restProps }) {
  return <Stripe {...restProps}>{children}</Stripe>;
};
