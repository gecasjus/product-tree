import styled from "styled-components/macro";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
  width: 500px;
  height: 100vh;
  border-right: 1px solid;
`;

export const Title = styled.p`
  font-size: 26px;
  color: #757575;
  text-align: center;
  border-bottom: 1px solid;
`;

export const RenderTree = styled.button`
  position: absolute;
  bottom: 0;
  background: #757575;
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
