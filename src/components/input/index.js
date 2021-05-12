import React from "react";
import { CustomInput } from "./styles/input";

export default function Input({ children, ...restProps }) {
  return <CustomInput {...restProps}>{children}</CustomInput>;
}
