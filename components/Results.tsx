"use client";

import { useTypingTest } from "@/contexts/TypingTestContext";

export default function Results() {
  const { results, startTest, resetTest } = useTypingTest();

  if (!results) return null;

  const handleRestart = () => {
    resetTest();
    setTimeout(() => startTest(), 50);
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <div className="bg-gray-800 rounded-lg p-8 space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Test Complete!</h2>
          <p className="text-gray-400">Here are your results</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-700 rounded-lg p-4 text-center">
            <div className="text-4xl font-bold text-green-500">
              {results.wpm}
            </div>
            <div className="text-sm text-gray-400 mt-1">WPM</div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4 text-center">
            <div className="text-4xl font-bold text-blue-500">
              {results.accuracy.toFixed(1)}%
            </div>
            <div className="text-sm text-gray-400 mt-1">Accuracy</div>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">Characters</span>
            <span className="font-semibold">
              <span className="text-green-500">{results.correctChars}</span>
              <span className="text-gray-500"> / </span>
              <span className="text-red-500">{results.incorrectChars}</span>
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Time</span>
            <span className="font-semibold">
              {results.timeElapsed.toFixed(1)}s
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Words</span>
            <span className="font-semibold">{results.wordsCompleted}</span>
          </div>
        </div>

        <button
          onClick={handleRestart}
          className="w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition-colors"
        >
          Restart Test
        </button>
      </div>
    </div>
  );
}
