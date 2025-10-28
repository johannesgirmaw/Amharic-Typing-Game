"use client";

import WordDisplay from "./WordDisplay";

interface TypingAreaProps {
  words: string[];
  currentWordIndex: number;
  typedText: string;
  correctWords: (boolean | undefined)[];
}

export default function TypingArea({
  words,
  currentWordIndex,
  typedText,
  correctWords,
}: TypingAreaProps) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div
        className="text-2xl leading-relaxed select-none wrap-break-word"
        style={{ fontFamily: "var(--font-amharic)" }}
      >
        {words.map((word, index) => (
          <WordDisplay
            key={`${word}-${index}`}
            word={word}
            typedText={index === currentWordIndex ? typedText : ""}
            isCurrent={index === currentWordIndex}
            isTyped={index < currentWordIndex}
            isCorrect={correctWords[index]}
          />
        ))}
      </div>
    </div>
  );
}
