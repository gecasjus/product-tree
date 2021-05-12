import React, { useState } from "react";
import { Input, Form, Button } from "../components";
import { Icon } from "semantic-ui-react";
import {
  useSpring,
  useChain,
  animated,
  useTransition,
  useSpringRef,
} from "react-spring";

export function UserConfirmation() {
  const [toggleRegister, setToggleRegister] = useState(false);

  const springApi = useSpringRef();
  const { height, width, ...rest } = useSpring({
    ref: springApi,

    from: { height: "100px", width: "100px" },
    to: {
      height: toggleRegister ? "450px" : "100px",
      width: toggleRegister ? "300px" : "100px",
    },
  });

  const transApi = useSpringRef();
  const transition = useSpring({
    ref: transApi,
    transform: toggleRegister
      ? "rotate(-360deg) translateX(100px) translateY(-140px)"
      : " rotate(0deg) translateX(0px) translateY(0px)",
  });

  const transitionToggle = useSpring({
    ref: transApi,
    transform: toggleRegister ? "rotate(360deg)" : " rotate(0deg)",
  });

  useChain(toggleRegister ? [transApi, springApi] : [springApi, transApi], [
    0,
    toggleRegister ? 0.1 : 0.6,
  ]);

  const toggle = () => {
    setToggleRegister((i) => !i);
  };

  return (
    <Form>
      <Form.Outer>
        <Button.Container
          style={{
            ...rest,
            zIndex: 4,
            position: "absolute",
            top: "-35px",
            right: "-35px",
            borderRadius: "20px",
            background: "#3457d5",
            width: width,
            height: height,
            ...transition,
          }}
          onClick={toggle}
        >
          <Button.Inner
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
              paddingLeft: "23px",
              paddingRight: "23px",
              ...transitionToggle,
            }}
          >
            <Button.Stripe />
            <Button.Stripe />
            <Button.Stripe />
          </Button.Inner>
        </Button.Container>

        <Form.SmallText>Log In</Form.SmallText>
        <Form.Inner>
          <Input
            icon={<Icon name="user outline" />}
            placeholder="yourusername"
          />
          <Input
            icon={<Icon name="lock" />}
            placeholder="password"
            type="password"
          />
          <Button>Sign In</Button>
        </Form.Inner>
      </Form.Outer>
      {/* {toggleRegister && (
        <Form.Register>
          <Form.Outer>
            <Form.SmallText color>Sign Up</Form.SmallText>
            <Form.Inner>
              <Input
                transparent
                color
                icon={<Icon name="user outline" />}
                placeholder="yourusername"
              />
              <Input
                transparent
                color
                icon={<Icon name="lock" />}
                placeholder="password"
                type="password"
              />
              <Button color className="transparent">
                Sign In
              </Button>
            </Form.Inner>
          </Form.Outer>
        </Form.Register>
      )} */}
    </Form>
  );
}
