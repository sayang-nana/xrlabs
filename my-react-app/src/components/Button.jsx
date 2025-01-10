import React from "react";

const Button = ({ children, type = "button", variant = "solid", ...props }) => {
  const baseStyle =
    "px-4 py-2 rounded-lg font-semibold flex items-center justify-center";
  const variants = {
    solid: "bg-black text-white hover:bg-gray-800",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button
      type={type}
      className={`${baseStyle} ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
