import { TestState, TestResults } from "@/types";

export function calculateWPM(testState: TestState): number {
  if (!testState.startTime || !testState.endTime) return 0;

  const timeInMinutes = (testState.endTime - testState.startTime) / (1000 * 60);
  const wordsTyped = testState.currentWordIndex;

  if (timeInMinutes === 0) return 0;

  return Math.round(wordsTyped / timeInMinutes);
}

export function calculateAccuracy(testState: TestState): number {
  const totalChars = testState.correctChars + testState.incorrectChars;
  if (totalChars === 0) return 100;

  return roundToDecimals(testState.correctChars / totalChars, 2);
}

export function calculateResults(testState: TestState): TestResults {
  const timeElapsed =
    testState.endTime && testState.startTime
      ? (testState.endTime - testState.startTime) / 1000
      : 0;

  return {
    wpm: calculateWPM(testState),
    accuracy: calculateAccuracy(testState),
    correctChars: testState.correctChars,
    incorrectChars: testState.incorrectChars,
    totalChars: testState.correctChars + testState.incorrectChars,
    timeElapsed,
    wordsCompleted: testState.currentWordIndex,
  };
}

function roundToDecimals(value: number, decimals: number): number {
  const factor = Math.pow(10, decimals);
  return Math.round(value * 100 * factor) / factor;
}
