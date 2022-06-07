import React, { useId } from "react";
import "./Input.css";

function EmailInput({
  name,
  placeholder = "xyz@gmail.com",
  value,
  changeHandler,
  required,
}) {
  const id = useId();
  return (
    <>
      <label
        htmlFor={id}
        className={`socketui-label email__label ${
          required ? "label-required" : ""
        }`}
      >
        Email
      </label>
      <input
        className="socketui-input email__input text-md"
        type="email"
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={changeHandler}
        required={required}
      />
    </>
  );
}

export default EmailInput;
