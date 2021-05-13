import React, { useState, useEffect } from "react";

import { REGISTER_USER, LOGIN_USER } from "./graphql/mutations/mutations";
import { useMutation } from "@apollo/client";

import { Main } from "./pages/main";
import { Unauth } from "./pages/unauth";

function App() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [switchScreens, setSwitchScreens] = useState(false);

  const [registerUser, { loading: registerLoading }] = useMutation(
    REGISTER_USER,
    {
      update: (proxy, results) => {
        setSwitchScreens(true);
      },
      onError: (err) => {
        setErrors(err.graphQLErrors[0].extensions.exception.errors);
      },
      variables: userData,
    }
  );

  const [loginUser, { loading: loginLoading }] = useMutation(LOGIN_USER, {
    update: (proxy, results) => {
      setSwitchScreens(true);
    },
    onError: (err) => {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: {
      username: userData.username,
      password: userData.password,
    },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    registerUser();
  };

  const handleLogin = (event) => {
    event.preventDefault();
    loginUser();
  };

  //main  => ids of all trees as a list, show the most recent
  //      => retrieve only auth user trees

  return (
    <>
      <Main id={1} />
      <Unauth
        handleChange={handleChange}
        handleRegister={handleRegister}
        handleLogin={handleLogin}
        setUserData={setUserData}
      />
    </>
  );
}

export default App;
