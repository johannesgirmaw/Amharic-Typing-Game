"use client";

import { useTypingTestSettings } from "@/contexts/TypingTestContext";
import { TestMode } from "@/types";

const timeOptions = [15, 30, 60, 120];
const wordOptions = [10, 25, 50, 100];

export default function TestSettings() {
  const { settings, updateSettings } = useTypingTestSettings();

  return (
    <div className="flex flex-col gap-4 mb-8">
      {/* Mode Selection */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => updateSettings({ mode: "time" })}
          className={`px-4 py-2 rounded transition-colors ${
            settings.mode === "time"
              ? "bg-yellow-500 text-black font-semibold"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          • time
        </button>
        <button
          onClick={() => updateSettings({ mode: "words" })}
          className={`px-4 py-2 rounded transition-colors ${
            settings.mode === "words"
              ? "bg-yellow-500 text-black font-semibold"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          A words
        </button>
      </div>

      {/* Duration/Word Count Selection */}
      {settings.mode === "time" ? (
        <div className="flex gap-2 flex-wrap">
          {timeOptions.map((time) => (
            <button
              key={time}
              onClick={() => updateSettings({ duration: time })}
              className={`px-4 py-2 rounded transition-colors ${
                settings.duration === time
                  ? "bg-yellow-500 text-black font-semibold"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      ) : (
        <div className="flex gap-2 flex-wrap">
          {wordOptions.map((count) => (
            <button
              key={count}
              onClick={() => updateSettings({ wordCount: count })}
              className={`px-4 py-2 rounded transition-colors ${
                settings.wordCount === count
                  ? "bg-yellow-500 text-black font-semibold"
                  : "bg-gray-700 hover:bg-gray-600"
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
