"use client";

import { useTypingTestSettings } from "@/contexts/TypingTestContext";
import { TestMode } from "@/types";

const timeOptions = [15, 30, 60, 120];
const wordOptions = [10, 25, 50, 100];

export default function TestSettings() {
  const { settings, updateSettings } = useTypingTestSettings();

  return (
    <div className="flex flex-col gap-3">
      {/* Mode Selection - Horizontal bar like monkeytype */}
      <div className="flex gap-2 flex-wrap justify-center">
        <button
          onClick={() => updateSettings({ mode: "time" })}
          className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
            settings.mode === "time"
              ? "bg-gray-800 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-300"
          }`}
        >
          ⏱ time
        </button>
        <button
          onClick={() => updateSettings({ mode: "words" })}
          className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
            settings.mode === "words"
              ? "bg-gray-800 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-300"
          }`}
        >
          A words
        </button>
      </div>

      {/* Duration/Word Count Selection - Horizontal bar like monkeytype */}
      {settings.mode === "time" ? (
        <div className="flex gap-2 flex-wrap justify-center">
          {timeOptions.map((time) => (
            <button
              key={time}
              onClick={() => updateSettings({ duration: time })}
              className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                settings.duration === time
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-300"
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      ) : (
        <div className="flex gap-2 flex-wrap justify-center">
          {wordOptions.map((count) => (
            <button
              key={count}
              onClick={() => updateSettings({ wordCount: count })}
              className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                settings.wordCount === count
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-300"
              }`}
            >
              {count}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
