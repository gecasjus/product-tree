import styled from "styled-components/macro";

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  right: 50px;
  height: 400px;
  width: 300px;
  margin: 35px;
  border-radius: 10px;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
`;

export const Register = styled.div`
  position: absolute;
  background: #3457d5;
  bottom: 0;
  right: 0;
  height: 450px;
  width: 300px;
  border-radius: 10px;
`;

export const Outer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 25px;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Select = styled.select`
  background: #333;
  min-width: 185px;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;
  width: auto;
`;

export const Submit = styled.button`
  background: #e50914;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 16px;
  border: 0;
  color: white;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
`;

export const SmallText = styled.h3`
  color: ${(props) => (props.color ? "white" : "black")};
  font-weight: 300;
`;

export const ReferenceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
  width: auto;
`;
