export type TestMode = "time" | "words";

export interface TestSettings {
  mode: TestMode;
  duration: number; // in seconds for time mode
  wordCount: number; // for words mode
}

export interface TestState {
  status: "idle" | "running" | "finished";
  currentWordIndex: number;
  typedText: string;
  startTime: number | null;
  endTime: number | null;
  words: string[];
  correctChars: number;
  incorrectChars: number;
  correctWords: boolean[]; // Track which words were typed correctly
}

export interface TestResults {
  wpm: number;
  accuracy: number;
  correctChars: number;
  incorrectChars: number;
  totalChars: number;
  timeElapsed: number;
  wordsCompleted: number;
}
