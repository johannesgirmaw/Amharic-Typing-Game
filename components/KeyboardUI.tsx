"use client";

import { useState } from "react";

// Standard QWERTY keyboard layout
const keyboardLayout = [
  [
    { key: "Q", amharic: "ቅ", amharicWithShift: "", label: "q", width: 1 },
    { key: "W", amharic: "ው", amharicWithShift: "", label: "w", width: 1 },
    { key: "E", amharic: "እ", amharicWithShift: "", label: "e", width: 1 },
    { key: "R", amharic: "ር", amharicWithShift: "", label: "r", width: 1 },
    { key: "T", amharic: "ት", amharicWithShift: "ጥ", label: "t", width: 1 },
    { key: "Y", amharic: "ይ", amharicWithShift: "", label: "y", width: 1 },
    { key: "U", amharic: "ኡ", amharicWithShift: "", label: "u", width: 1 },
    { key: "I", amharic: "ኢ", amharicWithShift: "", label: "i", width: 1 },
    { key: "O", amharic: "ኦ", amharicWithShift: "", label: "o", width: 1 },
    { key: "P", amharic: "ፕ", amharicWithShift: "ጵ", label: "p", width: 1 },
  ],
  [
    { key: "A", amharic: "አ", amharicWithShift: "", label: "a", width: 1 },
    { key: "S", amharic: "ስ", amharicWithShift: "ጽ", label: "s", width: 1 },
    { key: "D", amharic: "ድ", amharicWithShift: "", label: "d", width: 1 },
    { key: "F", amharic: "ፍ", amharicWithShift: "", label: "f", width: 1 },
    { key: "G", amharic: "ግ", amharicWithShift: "", label: "g", width: 1 },
    { key: "H", amharic: "ህ", amharicWithShift: "ሕ", label: "h", width: 1 },
    { key: "J", amharic: "ጅ", amharicWithShift: "", label: "j", width: 1 },
    { key: "K", amharic: "ክ", amharicWithShift: "ኽ", label: "k", width: 1 },
    { key: "L", amharic: "ል", amharicWithShift: "", label: "l", width: 1 },
  ],
  [
    {
      key: "shift",
      amharic: "",
      amharicWithShift: "",
      label: "shift",
      width: 2,
    },
    { key: "Z", amharic: "ዝ", amharicWithShift: "ዥ", label: "z", width: 1 },
    { key: "X", amharic: "ሽ", amharicWithShift: "", label: "x", width: 1 },
    { key: "C", amharic: "ች", amharicWithShift: "ጭ", label: "c", width: 1 },
    { key: "V", amharic: "ቭ", amharicWithShift: "", label: "v", width: 1 },
    { key: "B", amharic: "ብ", amharicWithShift: "", label: "b", width: 1 },
    { key: "N", amharic: "ን", amharicWithShift: "ኝ", label: "n", width: 1 },
    { key: "M", amharic: "ም", amharicWithShift: "", label: "m", width: 1 },
  ],
];

interface KeyProps {
  keyValue: string;
  amharic: string;
  amharicWithShift: string;
  label: string;
  width: number;
  shiftPressed: boolean;
  onShiftToggle(): void;
}

function Key({
  keyValue,
  amharic,
  amharicWithShift,
  label,
  width,
  shiftPressed,
  onShiftToggle,
}: KeyProps) {
  return (
    <div
      onClick={() => keyValue === "shift" && onShiftToggle()}
      className={`flex flex-col relative items-center justify-center bg-gray-700 border-2 border-gray-600 rounded-md p-2 min-h-[60px] transition-all shadow-md ${
        width > 1 ? `col-span-${width}` : ""
      } ${
        keyValue === "shift"
          ? "cursor-pointer bg-yellow-600 hover:bg-yellow-500"
          : "hover:bg-gray-600 hover:border-yellow-500"
      } ${keyValue === "shift" && shiftPressed ? "bg-yellow-600" : ""}`}
      style={{ minWidth: `${width * 50}px` }}
    >
      <div
        className={`text-base font-semibold text-gray-300 ${
          keyValue !== "shift" && "absolute top-0 left-0.5"
        }`}
      >
        {shiftPressed ? label.toUpperCase() : label}
      </div>
      {amharic && (
        <div
          className="text-2xl font-bold text-yellow-400 mt-1"
          style={{ fontFamily: "var(--font-amharic)" }}
        >
          {shiftPressed ? amharicWithShift : amharic}
        </div>
      )}
    </div>
  );
}

export default function KeyboardUI() {
  const [shiftPressed, setShiftPressed] = useState(false);
  const handleShiftPressed = () => {
    setShiftPressed(!shiftPressed);
  };
  return (
    <div className="w-full mx-auto">
      <div className="bg-gray-900 rounded-lg p-4 sm:p-6 border border-gray-700">
        <div className="mb-4 text-center">
          <h3 className="text-lg font-semibold text-gray-300 mb-2">
            English → Amharic Keyboard Map
          </h3>
          <p className="text-sm text-gray-400">
            Each key shows the English letter (top) and its corresponding
            Amharic character (bottom)
          </p>
        </div>

        <div className="space-y-2.5 max-w-3xl mx-auto">
          {/* Row 1: Q-P */}
          <div className="flex gap-1.5 sm:gap-2 justify-center flex-wrap">
            {keyboardLayout[0].map((keyData) => (
              <Key
                key={keyData.key}
                keyValue={keyData.key}
                amharicWithShift={keyData.amharicWithShift}
                amharic={keyData.amharic}
                label={keyData.label}
                width={keyData.width}
                shiftPressed={shiftPressed}
                onShiftToggle={handleShiftPressed}
              />
            ))}
          </div>

          {/* Row 2: A-L */}
          <div className="flex gap-1.5 sm:gap-2 justify-center flex-wrap">
            {keyboardLayout[1].map((keyData) => (
              <Key
                key={keyData.key}
                keyValue={keyData.key}
                amharic={keyData.amharic}
                amharicWithShift={keyData.amharicWithShift}
                label={keyData.label}
                width={keyData.width}
                shiftPressed={shiftPressed}
                onShiftToggle={handleShiftPressed}
              />
            ))}
          </div>

          {/* Row 3: Z-M */}
          <div className="flex gap-1.5 sm:gap-2 justify-center flex-wrap">
            {keyboardLayout[2].map((keyData) => (
              <Key
                key={keyData.key}
                keyValue={keyData.key}
                amharic={keyData.amharic}
                amharicWithShift={keyData.amharicWithShift}
                label={keyData.label}
                width={keyData.width}
                shiftPressed={shiftPressed}
                onShiftToggle={handleShiftPressed}
              />
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
          <p className="text-sm text-gray-300">
            <strong>Tip:</strong> The Amharic character shown is for the
            default. Add vowels (a, e, i, u, o) after the consonant to get
            different Amharic characters. For example: &quot;he&quot; → ሀ,
            &quot;hu&quot; → ሁ, &quot;hi&quot; → ሂ, &quot;ha&quot; → ሃ,
            &quot;hie&quot; → ሄ, &quot;h&quot; → ህ, &quot;ho&quot; → ሆ
          </p>
        </div>
      </div>
    </div>
  );
}
