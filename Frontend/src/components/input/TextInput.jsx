/* eslint-disable react/prop-types */
import { useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";
import "./style.css";
const TextInput = ({
  name,
  placeholder,
  formik,
  type = "text",
  disabled = false,
  icon = false,
  toggleIcon = false,
}) => {
  const [toggle, setToggle] = useState(false);

  const inputType =
    type === "password" && toggleIcon ? (toggle ? "text" : "password") : type;

  return (
    <div className="position-relative">
      <input
        type={inputType}
        id={name}
        name={name}
        disabled={disabled}
        className={`fs-7 rounded-2 p-2 d-block w-100 ${
          disabled ? "input-disabled" : ""
        }`}
        placeholder={placeholder}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name] || ""}
        style={{
          border: `1.5px solid ${
            formik.touched[name] && formik.errors[name]
              ? "rgb(200, 23, 23)"
              : "#E3E3E3"
          }`,
        }}
      />
      
      {icon && (
        <span className="position-absolute end-0 top-0 icon-m">{icon}</span>
      )}
      
      {toggleIcon && type === "password" && (
        <span
          className="position-absolute end-0 top-0 icon-m"
          onClick={() => setToggle((prev) => !prev)}
          style={{ cursor: "pointer" }}
        >
          {toggle ? (
            <GoEye size={16} className="opacity-50" />
          ) : (
            <GoEyeClosed size={16} className="opacity-50" />
          )}
        </span>
      )}

      {formik.touched[name] && formik.errors[name] ? (
        <div className="text-danger fs-7 err1">{formik.errors[name]}</div>
      ) : (
        <div className="error2 err1"></div>
      )}
    </div>
  );
};

export default TextInput;
