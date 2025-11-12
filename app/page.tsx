"use client";

import TestSettings from "@/components/TestSettings";
import TypingArea from "@/components/TypingArea";
import Results from "@/components/Results";
import TimerDisplay from "@/components/TimerDisplay";
import FloatingKeyboardButton from "@/components/FloatingKeyboardButton";
import {
  useTypingTest,
  useTypingTestInput,
} from "@/contexts/TypingTestContext";

export default function Home() {
  const { testState, settings, results, startTest } = useTypingTest();
  const { handleInput, handleKeyDown, inputRef } = useTypingTestInput();

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header - Minimal like monkeytype */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold mb-1 text-gray-800">
            Amharic Typing Test
          </h1>
          <p className="text-sm text-gray-500">ፍጥነቱን ለመፈተኽ ተጉዘይ</p>
        </div>

        {/* Settings Bar - Top aligned like monkeytype */}
        {testState.status === "idle" && (
          <div className="mb-8">
            <TestSettings />
            <div className="text-center mt-6">
              <button
                onClick={startTest}
                className="bg-gray-800 text-white font-medium px-6 py-2.5 rounded hover:bg-gray-700 transition-colors"
              >
                Start Test
              </button>
            </div>
          </div>
        )}

        {/* Main Typing Area - Centered like monkeytype */}
        {testState.status === "running" && (
          <>
            <div className="mb-6">
              <TypingArea />
            </div>

            <div className="text-center">
              <input
                ref={inputRef}
                type="text"
                inputMode="text"
                autoFocus
                onInput={(e) => handleInput(e.currentTarget.value)}
                onKeyDown={handleKeyDown}
                value={testState.typedText}
                onChange={() => {}}
                className="absolute opacity-0 pointer-events-none"
                tabIndex={-1}
                lang="am"
                autoComplete="off"
                spellCheck="false"
              />
              {testState.status === "running" &&
                settings.mode === "time" &&
                testState.startTime && <TimerDisplay />}
              {testState.status === "running" && settings.mode === "words" && (
                <p className="text-xl font-semibold text-gray-600">
                  {testState.currentWordIndex} / {settings.wordCount}
                </p>
              )}
            </div>
          </>
        )}

        {testState.status === "finished" && results && <Results />}

        {/* Footer - Minimal like monkeytype */}
        <div className="mt-12 text-center text-xs text-gray-400">
          <p>
            Press{" "}
            <kbd className="bg-gray-100 border border-gray-300 px-2 py-0.5 rounded text-gray-600">
              Tab + Enter
            </kbd>{" "}
            to restart |{" "}
            <kbd className="bg-gray-100 border border-gray-300 px-2 py-0.5 rounded text-gray-600">
              Esc
            </kbd>{" "}
            to reset
          </p>
        </div>
      </div>

      {/* Floating Keyboard Button */}
      <FloatingKeyboardButton />
    </main>
  );
}
