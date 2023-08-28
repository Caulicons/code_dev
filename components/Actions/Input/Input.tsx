import React from "react";

type inputProps = {
  type: "input" | "color";
  label?: string;
} & React.HTMLAttributes<HTMLInputElement>;

const Input = ({ type, label, className, ...props }: inputProps) => {
  return (
    <div className="relative">
      {label && (
        <label htmlFor={props.id} className="absolute -top-2 left-2">
          {label}
        </label>
      )}
      <input className="" {...props}></input>
    </div>
  );
};

export default Input;
