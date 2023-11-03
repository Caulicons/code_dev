import React from "react";

type inputProps = {
  type?: "input" | "color";
  label: string;
} & React.HTMLAttributes<HTMLInputElement>;

const InputOrColor = ({ type, label, ...props }: inputProps) => {
  if (type === "color")
    return (
      <input
        type="color"
        className="bg-darkBlue border p-[2.5px] border-white/100 h-10 min-w-[324px] rounded outline-none"
        {...props}
      />
    );

  return (
    <input
      placeholder={label}
      className="p-4 rounded-xl bg-white/10 hover:bg-white/20 text-white outline-none active:bg-white/20"
      {...props}
    />
  );
};

const Input = (props: inputProps) => {
  return (
    <div>
      <InputOrColor {...props} />
    </div>
  );
};

export default Input;
