import React, { useId, useState } from "react";
import "./Input.css";
import { VisibilityIcon, VisibilityOffIcon } from "../../../icon";

function PasswordInput({
  labelContent,
  name,
  placeholder = "*****",
  value,
  changeHandler,
  required,
  invalidMessage,
  children,
}) {
  const id = useId();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <label
        htmlFor={id}
        className={`socketui-label password__label ${
          required ? "label-required" : ""
        }`}
      >
        {labelContent}
      </label>
      {children}
      <div className="flex-row password">
        <input
          className="socketui-input password__input text-md"
          type={showPassword ? "text" : "password"}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={changeHandler}
          required={required}
          onInvalid={(e) =>
            invalidMessage && e.target.setCustomValidity(invalidMessage)
          }
          onInput={(e) => e.target.setCustomValidity("")}
        />
        <span onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? (
            <VisibilityOffIcon fontSize="large" />
          ) : (
            <VisibilityIcon fontSize="large" />
          )}
        </span>
      </div>
    </>
  );
}

export default PasswordInput;
