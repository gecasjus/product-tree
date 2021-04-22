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

export const Section = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

export const SectionTitle = styled.p`
  font-size: 16px;
  color: #757575;
  text-align: center;
  width: 100%;
  border-bottom: 1px solid;
`;

export const Form = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;
