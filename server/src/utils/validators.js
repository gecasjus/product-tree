export const validateRegister = (username, password, confirmPassword) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "Username is empty";
  }
  if (password.trim() === "") {
    errors.password = "Password is empty";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

export const validateLogin = (username, password) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "Username is empty";
  }
  if (password.trim() === "") {
    errors.password = "Password is empty";
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
