import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 100%;
`;

export const Input = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;
  &:last-of-type {
    margin-bottom: 30px;
  }
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

export const SmallText = styled.span`
  font-size: 12px;
  font-weight: bold;
  align-self: flex-start;
`;

export const ReferenceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
  width: auto;
`;
