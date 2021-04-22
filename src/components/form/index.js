import React from "react";
import {
  Container,
  Input,
  Select,
  Submit,
  SmallText,
  ReferenceContainer,
} from "./styles/form";

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
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
