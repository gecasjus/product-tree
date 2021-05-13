import styled from "styled-components/macro";
import { animated } from "react-spring";

export const CustomButton = styled.button`
  width: 100%;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 16px;
  border: 0;
  cursor: pointer;
`;

export const Container = styled(animated.div)``;
export const Path = styled(animated.div)``;
export const Inner = styled(animated.div)``;

export const LayoutWrapper = styled(animated.div)``;

export const StripeWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Stripe = styled.div`
  position: relative;
  width: 100%;
  background: white;
  border-radius: 3px;
  margin: 0px 5px 10px 5px;
  height: 5px;
  z-index: 3;
  &:nth-child(1) {
    width: 50%;
    align-self: flex-end;
    margin: 5px 0px 10px 5px;
  }
  &:nth-child(3) {
    width: 50%;
    align-self: flex-start;
    margin: 0;
  }
`;
