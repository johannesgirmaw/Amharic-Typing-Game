"use client";

// Standard QWERTY keyboard layout
const keyboardLayout = [
  [
    { key: "q", amharic: "ቀ", label: "Q", width: 1 },
    { key: "w", amharic: "ወ", label: "W", width: 1 },
    { key: "e", amharic: "እ", label: "E", width: 1 },
    { key: "r", amharic: "ረ", label: "R", width: 1 },
    { key: "t", amharic: "ተ", label: "T", width: 1 },
    { key: "y", amharic: "የ", label: "Y", width: 1 },
    { key: "u", amharic: "ኡ", label: "U", width: 1 },
    { key: "i", amharic: "ኢ", label: "I", width: 1 },
    { key: "o", amharic: "ኦ", label: "O", width: 1 },
    { key: "p", amharic: "ፐ", label: "P", width: 1 },
  ],
  [
    { key: "a", amharic: "አ", label: "A", width: 1 },
    { key: "s", amharic: "ሰ", label: "S", width: 1 },
    { key: "d", amharic: "ደ", label: "D", width: 1 },
    { key: "f", amharic: "ፈ", label: "F", width: 1 },
    { key: "g", amharic: "ገ", label: "G", width: 1 },
    { key: "h", amharic: "ሀ", label: "H", width: 1 },
    { key: "j", amharic: "", label: "J", width: 1 },
    { key: "k", amharic: "ከ", label: "K", width: 1 },
    { key: "l", amharic: "ለ", label: "L", width: 1 },
  ],
  [
    { key: "z", amharic: "ዘ", label: "Z", width: 1 },
    { key: "x", amharic: "ኸ", label: "X", width: 1 },
    { key: "c", amharic: "ች", label: "C", width: 1 },
    { key: "v", amharic: "ቨ", label: "V", width: 1 },
    { key: "b", amharic: "በ", label: "B", width: 1 },
    { key: "n", amharic: "ነ", label: "N", width: 1 },
    { key: "m", amharic: "መ", label: "M", width: 1 },
  ],
];

interface KeyProps {
  keyValue: string;
  amharic: string;
  label: string;
  width: number;
}

function Key({ keyValue, amharic, label, width }: KeyProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-gray-700 border-2 border-gray-600 rounded-md p-2 min-h-[60px] hover:bg-gray-600 hover:border-yellow-500 transition-all shadow-md ${
        width > 1 ? `col-span-${width}` : ""
      }`}
      style={{ minWidth: `${width * 50}px` }}
    >
      <div className="text-base font-semibold text-gray-300">{label}</div>
      {amharic && (
        <div
          className="text-2xl font-bold text-yellow-400 mt-1"
          style={{ fontFamily: "var(--font-amharic)" }}
        >
          {amharic}
        </div>
      )}
      {!amharic && keyValue === "j" && (
        <div className="text-xs text-gray-500 mt-1">N/A</div>
      )}
    </div>
  );
}

export default function KeyboardUI() {
  return (
    <div className="w-full mx-auto">
      <div className="bg-gray-900 rounded-lg p-4 sm:p-6 border border-gray-700">
        <div className="mb-4 text-center">
          <h3 className="text-lg font-semibold text-gray-300 mb-2">
            English → Amharic Keyboard Map
          </h3>
          <p className="text-sm text-gray-400">
            Each key shows the English letter (top) and its corresponding Amharic character (bottom)
          </p>
        </div>
        
        <div className="space-y-2.5 max-w-3xl mx-auto">
          {/* Row 1: Q-P */}
          <div className="flex gap-1.5 sm:gap-2 justify-center flex-wrap">
            {keyboardLayout[0].map((keyData) => (
              <Key
                key={keyData.key}
                keyValue={keyData.key}
                amharic={keyData.amharic}
                label={keyData.label}
                width={keyData.width}
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
                label={keyData.label}
                width={keyData.width}
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
                label={keyData.label}
                width={keyData.width}
              />
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
          <p className="text-sm text-gray-300">
            <strong>Tip:</strong> The Amharic character shown is for the default vowel (e). 
            Add vowels (a, i, u, o) after the consonant to get different Amharic characters. 
            For example: &quot;h&quot; → ህ, &quot;ha&quot; → ሃ, &quot;hi&quot; → ሂ, &quot;hu&quot; → ሁ, &quot;ho&quot; → ሆ
          </p>
        </div>
      </div>
    </div>
  );
}

