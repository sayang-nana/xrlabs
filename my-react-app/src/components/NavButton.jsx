// src/components/NavButton.jsx
import React from "react";

export default function NavButton({ children, path }) {
  return (
    <a
      href={path} // This will link to sections on the same page
      className="px-5 py-4 whitespace-nowrap border-2 border-black border-solid bg-zinc-50 rounded-[100px] text-xs text-black transform transition-transform duration-300 hover:scale-110"
    >
      {children}
    </a>
  );
}
