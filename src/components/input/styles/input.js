import styled from "styled-components/macro";
import { Input } from "semantic-ui-react";

export const CustomInput = styled(Input)`
  width: 100%;
  height: 35px;
  margin-bottom: 7px;
  border: ${(props) => (props.color ? "1px solid white" : "")};
  border-radius: 7px;
  padding-left: ${(props) => props.color && "1em"};
  line-height: ${(props) => props.color && "1.21428571em"};
`;
