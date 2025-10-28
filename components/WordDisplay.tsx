"use client";

interface WordDisplayProps {
  word: string;
  typedText: string;
  isCurrent: boolean;
  isTyped: boolean;
  isCorrect: boolean | undefined;
}

export default function WordDisplay({
  word,
  typedText,
  isCurrent,
  isTyped,
  isCorrect,
}: WordDisplayProps) {
  const renderWord = () => {
    if (!isCurrent && !isTyped) {
      // Upcoming words
      return <span className="word text-gray-500">{word}</span>;
    }

    if (isTyped && !isCurrent) {
      // Completed words - only show color if we've explicitly set correctWords
      // For words that have been evaluated (completion occurred)
      return (
        <span
          className={`word ${
            isCorrect === true
              ? "text-green-500"
              : isCorrect === false
              ? "text-red-500"
              : "text-gray-400"
          }`}
        >
          {word}
        </span>
      );
    }

    // Current word
    const chars = word.split("");
    const typedChars = typedText.split("");

    return (
      <span className="word">
        {chars.map((char, index) => {
          const typedChar = typedChars[index];
          let className = "";

          if (typedChar === undefined) {
            className = "char-upcoming";
          } else if (typedChar === char) {
            className = "char-correct";
          } else {
            className = "char-incorrect";
          }

          if (typedChars[index] === undefined && index === 0) {
            className = "char-current";
          }

          return (
            <span key={index} className={className}>
              {char}
            </span>
          );
        })}
      </span>
    );
  };

  return <div className="inline-block mx-1">{renderWord()}</div>;
}
