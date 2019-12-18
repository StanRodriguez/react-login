import React from "react";
import "./Login.css";
import FormElement from "../FormElement/FormElement";

export default function Login(...params) {
  return (
    <form>
      <FormElement name="username" label="Username" type="text" />
      <FormElement name="password" label="Password" type="password" />
      <button>Log In</button>
      <button>Sign Up</button>
    </form>
  );
}
