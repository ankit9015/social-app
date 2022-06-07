import React, { useId } from "react";
import "./Input.css";

function CheckboxInput({
  labelContent,
  name,
  checked,
  changeHandler,
  required,
}) {
  const id = useId();
  return (
    <>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        name={name}
        onChange={changeHandler}
        required={required}
      />
      <label
        htmlFor={id}
        className={`text-md ${required ? "label-required" : ""}`}
      >
        {" " + labelContent}
      </label>
    </>
  );
}

export default CheckboxInput;
