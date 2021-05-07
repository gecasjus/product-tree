import React, { useState, useEffect, useRef } from "react";
import { useMutation } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";
import { SideMenu, Form } from "../components";

export function SideMenuContainer() {
  const [labels, setLabels] = useState([{ id: 0, label: "Add new category" }]);

  const [parent, setParent] = useState("");

  const [nodes, setNodes] = useState([]);

  const [value, setValue] = useState("");

  //const [sendTree, { data }] = useMutation(SEND_TREE);

  const parentRef = useRef(parent);

  const setParentRef = (data) => {
    parentRef.current = data;
    setParent(data);
  };

  useEffect(() => {
    if (nodes.length === 1) {
      const arr = labels.filter(({ id }) => id !== 0);
      setLabels(arr);
    }
  }, [nodes]);

  // useEffect(() => {
  //   if (nodes) {
  //     sendTree({ products: nodes });
  //   }
  // }, [nodes]);

  const submitNode = () => {
    if (!parent) {
      setParentRef(labels[0].id);
    }
    const nodeId = uuidv4();
    const obj = {
      id: nodeId,
      parent: parentRef.current,
      value: value,
      price: null,
    };
    setNodes((prev) => [...prev, obj]);
    setLabels((prev) => [...prev, { id: nodeId, label: value }]);
    setValue("");
  };

  const choosingParent = (event, val) => {
    event.preventDefault();
    setParentRef(val);
  };

  return (
    <SideMenu>
      <SideMenu.Title>Product Tree</SideMenu.Title>
      <Form>
        <Form.Input
          placeholder="Product Name"
          value={value}
          onChange={({ target }) => setValue(target.value)}
        />
        <Form.ReferenceContainer>
          <Form.SmallText>Choose a reference</Form.SmallText>
          <Form.Select
            onChange={(event) => choosingParent(event, event.target.value)}
          >
            {labels.map(({ id, label }) => (
              <option key={id} value={id}>
                {label}
              </option>
            ))}
          </Form.Select>
        </Form.ReferenceContainer>

        <Form.Submit type="button" onClick={submitNode}>
          Submit
        </Form.Submit>
      </Form>
      <SideMenu.RenderTree>Create a tree</SideMenu.RenderTree>
    </SideMenu>
  );
}
