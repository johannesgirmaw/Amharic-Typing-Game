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
      <div className="bg-white border border-gray-200 rounded-lg p-8 space-y-6 shadow-sm">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-1 text-gray-800">Test Complete!</h2>
          <p className="text-sm text-gray-500">Here are your results</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
            <div className="text-4xl font-semibold text-gray-800">
              {results.wpm}
            </div>
            <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">WPM</div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
            <div className="text-4xl font-semibold text-gray-800">
              {results.accuracy.toFixed(1)}%
            </div>
            <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Accuracy</div>
          </div>
        </div>

        <div className="space-y-2 text-sm border-t border-gray-200 pt-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Characters</span>
            <span className="font-medium text-gray-800">
              <span className="text-gray-800">{results.correctChars}</span>
              <span className="text-gray-400 mx-1">/</span>
              <span className="text-gray-500">{results.incorrectChars}</span>
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Time</span>
            <span className="font-medium text-gray-800">
              {results.timeElapsed.toFixed(1)}s
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Words</span>
            <span className="font-medium text-gray-800">{results.wordsCompleted}</span>
          </div>
        </div>

        <button
          onClick={handleRestart}
          className="w-full bg-gray-800 text-white font-medium py-3 rounded-lg hover:bg-gray-700 transition-colors"
        >
          Restart Test
        </button>
      </div>
    </div>
  );
}
