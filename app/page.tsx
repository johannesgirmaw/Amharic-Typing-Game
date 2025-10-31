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
    <main className="min-h-screen bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Amharic Typing Test</h1>
          <p className="text-gray-400">ፍጥነቱን ለመፈተኽ ተጉዘይ</p>
        </div>

        {testState.status === "idle" && (
          <div className="mb-8">
            <TestSettings />
            <button
              onClick={startTest}
              className="mx-auto block bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg hover:bg-yellow-400 transition-colors"
            >
              Start Test
            </button>
          </div>
        )}

        {testState.status === "running" && (
          <>
            <TypingArea />

            <div className="mt-8 text-center">
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
                <p className="text-2xl font-bold">
                  {testState.currentWordIndex} / {settings.wordCount}
                </p>
              )}
            </div>
          </>
        )}

        {testState.status === "finished" && results && <Results />}

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>
            Press{" "}
            <kbd className="bg-gray-800 px-2 py-1 rounded">Tab + Enter</kbd> to
            restart | <kbd className="bg-gray-800 px-2 py-1 rounded">Esc</kbd>{" "}
            to reset
          </p>
        </div>
      </div>

      {/* Floating Keyboard Button */}
      <FloatingKeyboardButton />
    </main>
  );
}
