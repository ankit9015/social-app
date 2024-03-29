import React, { useId } from "react";
import "./Input.css";

function TextInput({
  name,
  placeholder,
  value,
  changeHandler,
  labelContent,
  required,
  invalidMessage,
}) {
  const id = useId();
  return (
    <>
      <label
        htmlFor={id}
        className={`socketui-label text__label ${
          required ? "label-required" : ""
        }`}
      >
        {labelContent}
      </label>

      <input
        className="socketui-input text__input text-md"
        type="text"
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={changeHandler}
        required={required}
        onInvalid={(e) =>
          invalidMessage && e.target.setCustomValidity(invalidMessage)
        }
        onInput={(e) => e.target.setCustomValidity("")}
      />
    </>
  );
}

export default TextInput;
