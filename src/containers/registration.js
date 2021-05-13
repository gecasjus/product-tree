import React from "react";
import { Icon } from "semantic-ui-react";
import { Input, Form, Button } from "../components";

export function Registration({ handleChange, handleRegister }) {
  return (
    <Form.Register>
      <Form.Outer>
        <Form.SmallText>Sign Up</Form.SmallText>
        <Form.Inner>
          <Input
            name="username"
            transparent
            icon={<Icon name="user outline" />}
            placeholder="yourusername"
            onChange={handleChange}
          />
          <Input
            name="password"
            transparent
            icon={<Icon name="lock" />}
            placeholder="password"
            type="password"
            onChange={handleChange}
          />
          <Input
            name="confirmPassword"
            transparent
            icon={<Icon name="lock" />}
            placeholder="confirmpassword"
            type="password"
            onChange={handleChange}
          />
          <Button
            type="submit"
            onClick={handleRegister}
            className="transparent"
          >
            Sign In
          </Button>
        </Form.Inner>
      </Form.Outer>
    </Form.Register>
  );
}
