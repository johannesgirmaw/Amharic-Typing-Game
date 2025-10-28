"use client";

import { TestMode } from "@/types";

interface TestSettingsProps {
  mode: TestMode;
  duration: number;
  wordCount: number;
  onModeChange: (mode: TestMode) => void;
  onDurationChange: (duration: number) => void;
  onWordCountChange: (count: number) => void;
  disabled?: boolean;
}

const timeOptions = [15, 30, 60, 120];
const wordOptions = [10, 25, 50, 100];

export default function TestSettings({
  mode,
  duration,
  wordCount,
  onModeChange,
  onDurationChange,
  onWordCountChange,
  disabled = false,
}: TestSettingsProps) {
  return (
    <div className="flex flex-col gap-4 mb-8">
      {/* Mode Selection */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => onModeChange("time")}
          disabled={disabled}
          className={`px-4 py-2 rounded transition-colors ${
            mode === "time"
              ? "bg-yellow-500 text-black font-semibold"
              : "bg-gray-700 hover:bg-gray-600"
          } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          • time
        </button>
        <button
          onClick={() => onModeChange("words")}
          disabled={disabled}
          className={`px-4 py-2 rounded transition-colors ${
            mode === "words"
              ? "bg-yellow-500 text-black font-semibold"
              : "bg-gray-700 hover:bg-gray-600"
          } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          A words
        </button>
      </div>

      {/* Duration/Word Count Selection */}
      {mode === "time" ? (
        <div className="flex gap-2 flex-wrap">
          {timeOptions.map((time) => (
            <button
              key={time}
              onClick={() => onDurationChange(time)}
              disabled={disabled}
              className={`px-4 py-2 rounded transition-colors ${
                duration === time
                  ? "bg-yellow-500 text-black font-semibold"
                  : "bg-gray-700 hover:bg-gray-600"
              } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
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
              onClick={() => onWordCountChange(count)}
              disabled={disabled}
              className={`px-4 py-2 rounded transition-colors ${
                wordCount === count
                  ? "bg-yellow-500 text-black font-semibold"
                  : "bg-gray-700 hover:bg-gray-600"
              } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {count}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
