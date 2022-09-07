import React, { useEffect, useState } from "react";
import "./auth.css";
import { CheckboxInput, EmailInput, PasswordInput, TextInput } from "../common";
import { signupUser } from "./authSlice";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addToast } from "../common/Toast/ToastSlice";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTC: false,
  });

  const submitHandler = (e, signupForm) => {
    e.preventDefault();
    for (const [key, value] of Object.entries(formData)) {
      if (key === "agreeTC" && !value) return;
      if (value === "") return;
    }
    if (formData.password !== formData.confirmPassword) {
      dispatch(
        addToast({
          message: "Please enter matching passwords",
          type: "error",
        })
      );
      return;
    }
    signupHandler(signupForm);
  };

  const signupHandler = async (signupForm) => {
    try {
      dispatch(signupUser(signupForm)).unwrap();
      location.state ? navigate(location.state.from) : navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    document.title = "Signup";
  });
  return (
    <div className="signup">
      <h1 className="signup__header text-lg font-bold text-center">Signup</h1>
      <form
        className="signup__form text-md flex-column"
        onSubmit={(e) => submitHandler(e, formData)}
      >
        <div className="signup__row">
          <div className="signup__first-name">
            <TextInput
              labelContent="First Name"
              name="firstName"
              placeholder="Ankit"
              value={formData.firstName ?? ""}
              changeHandler={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              required
            />
          </div>
          <div className="signup__last-name">
            <TextInput
              labelContent="Last Name"
              name="lastName"
              placeholder="Joshi"
              value={formData.lastName ?? ""}
              changeHandler={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              required
            />
          </div>
        </div>

        <div className="signup__username">
          <TextInput
            labelContent="Username"
            name="username"
            placeholder="@ankit123"
            value={formData.username ?? ""}
            changeHandler={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            required
            invalidMessage="Username can not be empty"
          />
        </div>

        <div className="signup__email">
          <EmailInput
            name="email"
            value={formData.email ?? ""}
            changeHandler={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            invalidMessage="Enter valid email address"
          />
        </div>
        <div className="signup__password">
          <PasswordInput
            labelContent="Password"
            name="password"
            value={formData.password ?? ""}
            changeHandler={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
            invalidMessage="Password can not be empty"
          />
        </div>
        <div className="signup__password">
          <PasswordInput
            labelContent="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword ?? ""}
            changeHandler={(e) => {
              setFormData({ ...formData, confirmPassword: e.target.value });
            }}
            required
            invalidMessage="Enter a matching Password"
          >
            {formData.confirmPassword !== "" &&
              formData.password !== formData.confirmPassword && (
                <p className="text-md form-error">
                  <small>Enter a matching password</small>
                </p>
              )}
          </PasswordInput>
        </div>
        <div className="signup__TC">
          <CheckboxInput
            labelContent="I accept all Terms and Conditions"
            checked={formData.agreeTC ?? false}
            name="agreeTC"
            changeHandler={() =>
              setFormData({ ...formData, agreeTC: !formData.agreeTC })
            }
            required
          />
        </div>
        <button className="text-md button button-primary" type="submit">
          Create new account
        </button>
        <p
          className="text-md text-center pointer"
          onClick={() => navigate("../login")}
        >
          Already have an account
        </p>
      </form>
    </div>
  );
}

export default Signup;
