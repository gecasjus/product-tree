import React from "react";
import {
  Container,
  Inner,
  Select,
  Outer,
  Submit,
  SmallText,
  ReferenceContainer,
  Register,
} from "./styles/form";

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Inner = function FormInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

Form.Outer = function FormOuter({ children, ...restProps }) {
  return <Outer {...restProps}>{children}</Outer>;
};

Form.Register = function FormRegister({ children, ...restProps }) {
  return <Register {...restProps}>{children}</Register>;
};

Form.SmallText = function FormSmallText({ children, ...restProps }) {
  return <SmallText {...restProps}>{children}</SmallText>;
};

Form.Select = function FormSelect({ children, ...restProps }) {
  return <Select {...restProps}>{children}</Select>;
};

Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};

Form.ReferenceContainer = function FormReferenceContainer({
  children,
  ...restProps
}) {
  return <ReferenceContainer {...restProps}>{children}</ReferenceContainer>;
};
