"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import TestSettings from "@/components/TestSettings";
import TypingArea from "@/components/TypingArea";
import Results from "@/components/Results";
import TimerDisplay from "@/components/TimerDisplay";
import { getRandomWords } from "@/data/words";
import { calculateResults } from "@/utils/calculations";
import { TestState, TestMode, TestResults } from "@/types";
import { convertEnglishToAmharic } from "@/utils/phoneticToAmharic";

export default function Home() {
  const [settings, setSettings] = useState({
    mode: "time" as TestMode,
    duration: 30,
    wordCount: 25,
  });

  const [testState, setTestState] = useState<TestState>(() => {
    const words = typeof window !== "undefined" ? getRandomWords(200) : [];
    return {
      status: "idle",
      currentWordIndex: 0,
      typedText: "",
      startTime: null,
      endTime: null,
      words,
      correctChars: 0,
      incorrectChars: 0,
      correctWords: Array(words.length).fill(undefined),
    };
  });

  const [results, setResults] = useState<TestResults | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleTestEnd = useCallback(() => {
    setTestState((prev) => {
      const finalState: TestState = {
        ...prev,
        status: "finished",
        endTime: Date.now(),
      };
      setResults(calculateResults(finalState));
      return finalState;
    });
  }, []);

  useEffect(() => {
    if (
      testState.status === "running" &&
      settings.mode === "time" &&
      testState.startTime
    ) {
      const interval = setInterval(() => {
        const elapsed = (Date.now() - testState.startTime!) / 1000;

        if (elapsed >= settings.duration) {
          handleTestEnd();
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [
    testState.status,
    testState.startTime,
    settings.mode,
    settings.duration,
    handleTestEnd,
  ]);

  const createInitialState = (): TestState => {
    const words = getRandomWords(200);
    return {
      status: "idle",
      currentWordIndex: 0,
      typedText: "",
      startTime: null,
      endTime: null,
      words,
      correctChars: 0,
      incorrectChars: 0,
      correctWords: Array(words.length).fill(undefined),
    };
  };

  const startTest = () => {
    const words = getRandomWords(200);
    setTestState({
      ...createInitialState(),
      status: "running",
      words,
      correctWords: Array(words.length).fill(undefined),
      startTime: Date.now(),
    });
    setResults(null);
    inputRef.current?.focus();
  };

  const resetTest = () => {
    setTestState(createInitialState());
    setResults(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    console.log("Key pressed:", e.key, "Code:", e.code, "KeyCode:", e.keyCode);

    if (e.key === "Tab" && e.shiftKey) {
      e.preventDefault();
      resetTest();
    }

    if (e.key === "Escape") {
      resetTest();
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    console.log("Raw input:", inputValue);

    // Store raw input temporarily without resetting correctWords
    setTestState((prev) => ({
      ...prev,
      typedText: inputValue,
      // Keep existing correctWords array intact
      correctWords: prev.correctWords,
    }));

    // Clear existing timeout
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    // Debounce: wait 150ms before converting to allow multi-character patterns
    debounceTimeoutRef.current = setTimeout(() => {
      const converted = convertEnglishToAmharic(inputValue);
      console.log("Converted:", converted);

      setTestState((prev) => {
        const newState = {
          ...prev,
          typedText: converted,
          correctWords: prev.correctWords,
        };
        // Update input field value
        if (inputRef.current) {
          inputRef.current.value = converted;
        }
        return newState;
      });
    }, 150); // 150ms delay to wait for multi-char combinations

    // Handle space key for word completion
    if (inputValue[inputValue.length - 1] === " ") {
      const converted = convertEnglishToAmharic(inputValue);

      setTestState((prev) => {
        if (prev.status !== "running") {
          startTest();
          return prev;
        }

        const currentWord = prev.words[prev.currentWordIndex];
        const trimmedInput = converted.trim();
        const isCorrect = trimmedInput === currentWord;

        const wordLength = currentWord.length;
        const correctChars = isCorrect ? wordLength : 0;
        const incorrectChars = isCorrect ? 0 : wordLength;

        const newCorrectWords = [...prev.correctWords];
        newCorrectWords[prev.currentWordIndex] = isCorrect;

        const nextIndex = prev.currentWordIndex + 1;

        const newState = {
          ...prev,
          currentWordIndex: nextIndex,
          typedText: "",
          correctChars: prev.correctChars + correctChars,
          incorrectChars: prev.incorrectChars + incorrectChars,
          correctWords: newCorrectWords,
        };

        // Check if test should end
        if (settings.mode === "words" && nextIndex >= settings.wordCount) {
          const finalState: TestState = {
            ...newState,
            status: "finished",
            endTime: Date.now(),
          };
          setResults(calculateResults(finalState));
          return finalState;
        }

        return newState;
      });

      e.target.value = "";
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Amharic Typing Test</h1>
          <p className="text-gray-400">ፍጥነቱን ለመፈተኽ ተጉዘይ</p>
        </div>

        {testState.status === "idle" && (
          <div className="mb-8">
            <TestSettings
              mode={settings.mode}
              duration={settings.duration}
              wordCount={settings.wordCount}
              onModeChange={(mode) =>
                setSettings((prev) => ({ ...prev, mode }))
              }
              onDurationChange={(duration) =>
                setSettings((prev) => ({ ...prev, duration }))
              }
              onWordCountChange={(wordCount) =>
                setSettings((prev) => ({ ...prev, wordCount }))
              }
            />
            <button
              onClick={startTest}
              className="mx-auto block bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg hover:bg-yellow-400 transition-colors"
            >
              Start Test
            </button>
          </div>
        )}

        {(testState.status === "running" || testState.status === "idle") && (
          <>
            <TypingArea
              words={testState.words}
              currentWordIndex={testState.currentWordIndex}
              typedText={testState.typedText}
              correctWords={testState.correctWords}
            />

            <div className="mt-8 text-center">
              <input
                ref={inputRef}
                type="text"
                inputMode="text"
                autoFocus
                onInput={handleInput}
                onKeyDown={handleKeyDown}
                value={testState.typedText}
                onChange={() => {}}
                className="absolute opacity-0 pointer-events-none"
                tabIndex={-1}
                lang="am"
                autoComplete="off"
                spellCheck="false"
              />
              {testState.status === "idle" && (
                <p className="text-gray-500 text-sm">
                  Click Start Test to begin
                </p>
              )}
              {testState.status === "running" &&
                settings.mode === "time" &&
                testState.startTime && (
                  <TimerDisplay
                    startTime={testState.startTime}
                    duration={settings.duration}
                  />
                )}
              {testState.status === "running" && settings.mode === "words" && (
                <p className="text-2xl font-bold">
                  {testState.currentWordIndex} / {settings.wordCount}
                </p>
              )}
            </div>
          </>
        )}

        {testState.status === "finished" && results && (
          <Results
            results={results}
            onRestart={() => {
              resetTest();
              setTimeout(() => startTest(), 50);
            }}
          />
        )}

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>
            Press{" "}
            <kbd className="bg-gray-800 px-2 py-1 rounded">Tab + Enter</kbd> to
            restart | <kbd className="bg-gray-800 px-2 py-1 rounded">Esc</kbd>{" "}
            to reset
          </p>
        </div>
      </div>
    </main>
  );
}
