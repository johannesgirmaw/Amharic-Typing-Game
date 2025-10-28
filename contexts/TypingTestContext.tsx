"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
  ReactNode,
} from "react";
import { TestState, TestMode, TestResults, TestSettings } from "@/types";
import { getRandomWords } from "@/data/words";
import { calculateResults } from "@/utils/calculations";
import { convertEnglishToAmharic } from "@/utils/phoneticToAmharic";

// Context value interface
interface TypingTestContextValue {
  // Settings
  settings: TestSettings;
  updateSettings: (settings: Partial<TestSettings>) => void;

  // Test State
  testState: TestState;

  // Test Control Actions
  startTest: () => void;
  resetTest: () => void;
  endTest: () => void;

  // Input Handling
  handleInput: (inputValue: string) => void;
  handleKeyDown: (e: React.KeyboardEvent) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;

  // Results
  results: TestResults | null;

  // Computed Values
  getCurrentWord: () => string;
  getTimeRemaining: () => number;
  getWordsProgress: () => number;
}

// Create the context
const TypingTestContext = createContext<TypingTestContextValue | undefined>(
  undefined
);

// Create initial state factory
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

// Provider Component
interface TypingTestProviderProps {
  children: ReactNode;
}

export function TypingTestProvider({ children }: TypingTestProviderProps) {
  // Settings State
  const [settings, setSettings] = useState<TestSettings>({
    mode: "time" as TestMode,
    duration: 30,
    wordCount: 25,
  });

  // Test State
  const [testState, setTestState] = useState<TestState>(createInitialState);

  // Results State
  const [results, setResults] = useState<TestResults | null>(null);

  // Refs
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Update Settings
  const updateSettings = useCallback((newSettings: Partial<TestSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  }, []);

  // Start Test
  const startTest = useCallback(() => {
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
  }, []);

  // Reset Test
  const resetTest = useCallback(() => {
    setTestState(createInitialState());
    setResults(null);
  }, []);

  // End Test
  const endTest = useCallback(() => {
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

  // Handle Input
  const handleInput = useCallback(
    (inputValue: string) => {
      console.log("Raw input:", inputValue);

      // Store raw input temporarily without resetting correctWords
      setTestState((prev) => ({
        ...prev,
        typedText: inputValue,
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
      }, 150);

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

        if (inputRef.current) {
          inputRef.current.value = "";
        }
      }
    },
    [settings.mode, settings.wordCount, startTest]
  );

  // Handle Key Down
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      console.log(
        "Key pressed:",
        e.key,
        "Code:",
        e.code,
        "KeyCode:",
        e.keyCode
      );

      if (e.key === "Tab" && e.shiftKey) {
        e.preventDefault();
        resetTest();
      }

      if (e.key === "Escape") {
        resetTest();
      }
    },
    [resetTest]
  );

  // Timer Effect - Auto end test when time runs out
  useEffect(() => {
    if (
      testState.status === "running" &&
      settings.mode === "time" &&
      testState.startTime
    ) {
      const interval = setInterval(() => {
        const elapsed = (Date.now() - testState.startTime!) / 1000;

        if (elapsed >= settings.duration) {
          endTest();
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [
    testState.status,
    testState.startTime,
    settings.mode,
    settings.duration,
    endTest,
  ]);

  // Cleanup debounce on unmount
  useEffect(() => {
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, []);

  // Computed Values
  const getCurrentWord = useCallback(() => {
    return testState.words[testState.currentWordIndex] || "";
  }, [testState.words, testState.currentWordIndex]);

  const getTimeRemaining = useCallback(() => {
    if (
      testState.status !== "running" ||
      !testState.startTime ||
      settings.mode !== "time"
    ) {
      return 0;
    }
    const elapsed = (Date.now() - testState.startTime) / 1000;
    return Math.max(0, Math.ceil(settings.duration - elapsed));
  }, [testState.status, testState.startTime, settings.mode, settings.duration]);

  const getWordsProgress = useCallback(() => {
    if (settings.mode === "words") {
      return testState.currentWordIndex;
    }
    return 0;
  }, [settings.mode, testState.currentWordIndex]);

  // Context Value
  const value: TypingTestContextValue = {
    settings,
    updateSettings,
    testState,
    startTest,
    resetTest,
    endTest,
    handleInput,
    handleKeyDown,
    inputRef,
    results,
    getCurrentWord,
    getTimeRemaining,
    getWordsProgress,
  };

  return (
    <TypingTestContext.Provider value={value}>
      {children}
    </TypingTestContext.Provider>
  );
}

// Custom Hook to use the context
export function useTypingTest(): TypingTestContextValue {
  const context = useContext(TypingTestContext);

  if (context === undefined) {
    throw new Error("useTypingTest must be used within a TypingTestProvider");
  }

  return context;
}

// Export individual hooks for specific use cases
export function useTypingTestSettings() {
  const { settings, updateSettings } = useTypingTest();
  return { settings, updateSettings };
}

export function useTypingTestState() {
  const { testState } = useTypingTest();
  return testState;
}

export function useTypingTestActions() {
  const { startTest, resetTest, endTest, handleInput, handleKeyDown } =
    useTypingTest();
  return { startTest, resetTest, endTest, handleInput, handleKeyDown };
}

export function useTypingTestResults() {
  const { results } = useTypingTest();
  return results;
}

export function useTypingTestInput() {
  const { handleInput, handleKeyDown, inputRef } = useTypingTest();
  return { handleInput, handleKeyDown, inputRef };
}

export function useTypingTestComputed() {
  const { getCurrentWord, getTimeRemaining, getWordsProgress } =
    useTypingTest();
  return { getCurrentWord, getTimeRemaining, getWordsProgress };
}
