import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { CheckboxInput, PasswordInput, TextInput } from "../common";
import "./auth.css";
import { loginUser } from "./authSlice";

function Login() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(
    JSON.parse(localStorage.getItem("savedLogin")) ?? {}
  );

  const submitHandler = async (e, loginForm) => {
    e.preventDefault();
    if (loginForm.rememberMe) {
      localStorage.setItem(
        "savedLogin",
        JSON.stringify({
          username: loginForm.username,
          password: loginForm.password,
        })
      );
    }
    if (loginForm.username !== "" && loginForm.password !== "") {
      loginHandler(loginForm);
    }
  };

  const loginHandler = async (loginForm) => {
    try {
      await dispatch(loginUser(loginForm)).unwrap();
      location.state ? navigate(location.state.from) : navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  const guestUser = {
    username: "ankitjoshi",
    password: "ankit123",
  };
  return (
    <div className="login ">
      <h1 className="login__header text-lg font-bold text-center">Login</h1>
      <form
        className="login__form text-md flex-column"
        onSubmit={(e) => submitHandler(e, formData)}
      >
        <div className="login__username">
          <TextInput
            labelContent="Username"
            name="username"
            placeholder="ankit123"
            value={formData.username ?? ""}
            changeHandler={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            required
          />
        </div>
        <div className="login__password">
          <PasswordInput
            labelContent="Password"
            name="password"
            placeholder="*****"
            value={formData.password ?? ""}
            changeHandler={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
        </div>
        <div className="flex-row login__row">
          <div>
            <CheckboxInput
              labelContent="Remember me"
              checked={formData.rememberMe ?? false}
              name="remember-me"
              changeHandler={() =>
                setFormData({ ...formData, rememberMe: !formData.rememberMe })
              }
            />
          </div>
          <div className="login__forgot-password text-blue">
            Forgot Password
          </div>
        </div>
        <button className="text-md button button-primary" type="submit">
          Login
        </button>
        <button
          className="text-md button button-outline-primary"
          onClick={(e) => {
            submitHandler(e, guestUser);
          }}
          type="submit"
        >
          Login as Guest
        </button>
        <p
          className="text-md text-center font-bold pointer"
          onClick={() => {
            navigate("../signup");
          }}
        >
          Create an account
        </p>
      </form>
    </div>
  );
}

export default Login;
