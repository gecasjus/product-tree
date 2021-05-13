import React, { useState } from "react";
import { Form } from "../components";
import { Login } from "../containers/login";
import { Registration } from "../containers/registration";

export function Unauth(props) {
  const [open, setOpen] = useState(false);

  const toggleIcon = () => {
    setOpen((i) => !i);
    props.setUserData({});
  };
  return (
    <Form>
      <Login toggleIcon={toggleIcon} open={open} {...props} />
      {open && <Registration {...props} />}
    </Form>
  );
}
