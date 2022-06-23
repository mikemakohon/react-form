const data = {
  fields: {
    name: {
      title: "Name",
      type: "name",
      name: "name",
      value: "",
      error: false,
      placeholder: "Input your name..",
      required: true,
      validator: (value = "") => {
        return value.length >= 2 ? false : "Name is too short";
      },
    },
    email: {
      title: "Email",
      type: "email",
      name: "email",
      value: "",
      error: false,
      placeholder: "Input your email..",
      validator: (value = "") => {
        return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
          ? false
          : "Email is invalid";
      },
    },
    password: {
      title: "Password",
      type: "password",
      name: "password",
      autoComplete: "false",
      value: "",
      error: false,
      required: true,
      placeholder: "Input your password..",
      validator: (value = "") => {
        return value.match(
          /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
        )
          ? false
          : "Password is too simple";
      },
    },
    passwordConfirm: {
      title: "Password confirm",
      type: "password",
      name: "passwordConfirm",
      autoComplete: "false",
      value: "",
      error: false,
      required: true,
      placeholder: "Confirm your password..",
      validator: (value = "", allValues) => {
        return value === allValues ? false : "Passwords dont match";
      },
    },
  },
  isError: null,
};

export default data;
