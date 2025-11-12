"use client";

import WordDisplay from "./WordDisplay";
import { useTypingTestState } from "@/contexts/TypingTestContext";

export default function TypingArea() {
  const testState = useTypingTestState();
  const { words, currentWordIndex, typedText, correctWords, typedWords } =
    testState;

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div
        className="text-2xl leading-relaxed select-none wrap-break-word text-gray-800"
        style={{ fontFamily: "var(--font-amharic)" }}
      >
        {words.map((word, index) => (
          <WordDisplay
            key={`${word}-${index}`}
            word={word}
            typedText={
              index === currentWordIndex ? typedText : typedWords[index] || ""
            }
            isCurrent={index === currentWordIndex}
            isTyped={index < currentWordIndex}
            isCorrect={correctWords[index]}
          />
        ))}
      </div>
    </div>
  );
}
