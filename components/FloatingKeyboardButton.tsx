"use client";

import { useState } from "react";
import KeyboardMap from "./KeyboardMap";

export default function FloatingKeyboardButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleKeyboard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={toggleKeyboard}
        className="fixed bottom-6 right-6 z-30 bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 flex items-center gap-2"
        aria-label="Toggle keyboard map"
        title="Show keyboard map"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
        <span className="hidden sm:inline">Keyboard</span>
      </button>

      {/* Keyboard Map Drawer */}
      <KeyboardMap isOpen={isOpen} onClose={toggleKeyboard} />
    </>
  );
}
