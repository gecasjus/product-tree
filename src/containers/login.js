import React, { useState, useEffect, useRef } from "react";
import { Input, Form, Button } from "../components";
import { Icon } from "semantic-ui-react";
import { easeQuad } from "d3-ease";
import { useSpring, useChain, useSpringRef } from "react-spring";
import useSize from "../hooks/useSize";

export function Login({ open, toggleIcon, handleChange, handleLogin }) {
  const [widthLimit, setWidthLimit] = useState(false);

  const containerRef = useRef(null);
  const { widthLength } = useSize(containerRef);

  useEffect(() => {
    if (widthLength === 300) {
      setWidthLimit(true);
    } else {
      setWidthLimit(false);
    }
  }, [widthLength]);

  const { height, top, ...rest } = useSpring({
    from: {
      height: "110px",
      top: "200px",
    },
    to: {
      height: open ? "430px" : "110px",
      top: open ? "-40px" : "200px",
    },
    delay: 140,
    config: { duration: 700, easing: easeQuad },
  });
  const { width, overflow } = useSpring({
    from: {
      width: "110px",
      overflow: "hidden",
    },
    to: {
      width: open ? "300px" : "110px",
      overflow: widthLimit ? "visible" : "hidden",
    },

    config: { duration: 230, easing: easeQuad },
  });

  const transitionDiv = useSpring({
    from: {
      transform: "translateX(110px)",
    },
    to: {
      transform: open ? "translateX(0px)" : "translateX(110px)",
    },
    config: {
      duration: 380,
      delay: 140,
    },
  });

  const transitionStripes = useSpring({
    transform: open
      ? "rotate(-360deg) translateX(-20px) translateY(-30px)"
      : "rotate(0deg) translateX(0px) translateY(0px)",
    config: { duration: 720, easing: easeQuad },
  });
  const transitionPath = useSpring({
    transform: open ? "rotate(360deg) " : " rotate(0deg)",
    config: {
      duration: 720,
      easing: easeQuad,
    },
  });
  return (
    <Form.Outer>
      <Button.LayoutWrapper
        style={{
          position: "absolute",
          top: 0,
          right: "0",
          overflow: overflow,
          height: "350px",
          width: "300px",
          zIndex: 1,
        }}
      >
        <Button.Container
          ref={containerRef}
          style={{
            ...rest,
            zIndex: 4,
            position: "absolute",
            top: top,
            right: 0,
            borderRadius: "20px",
            background: "#3457d5",
            width: width,
            height: height,
            ...transitionDiv,
          }}
        />
      </Button.LayoutWrapper>
      <Button.Path
        style={{
          width: "120px",
          height: "120px",
          position: "absolute",
          top: "30px",
          right: "55px",
          zIndex: 5,
          transformOrigin: "58% 120px",
          ...transitionPath,
        }}
      >
        <Button.Inner
          style={{
            background: "#3457d5",
            position: "absolute",
            top: "-45px",
            right: "-65px",
            height: "80px",
            width: "80px",
            borderRadius: "20px",
            paddingLeft: "23px",
            paddingRight: "23px",
            zIndex: 5,
            ...transitionStripes,
          }}
          onClick={toggleIcon}
        >
          <Button.StripeWrapper>
            <Button.Stripe />
            <Button.Stripe />
            <Button.Stripe />
          </Button.StripeWrapper>
        </Button.Inner>
      </Button.Path>
      <Form.SmallText>Log In</Form.SmallText>
      <Form.Inner>
        <Input
          name="username"
          icon={<Icon name="user outline" />}
          placeholder="yourusername"
          onChange={handleChange}
        />
        <Input
          name="password"
          icon={<Icon name="lock" />}
          placeholder="password"
          onChange={handleChange}
          type="password"
        />
        <Button onClick={handleLogin}>Sign In</Button>
      </Form.Inner>
    </Form.Outer>
  );
}
