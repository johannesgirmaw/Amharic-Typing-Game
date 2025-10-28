"use client";

interface WordDisplayProps {
  word: string;
  typedText: string;
  isCurrent: boolean;
  isTyped: boolean;
  isCorrect: boolean;
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
      // Completed words
      return (
        <span
          className={`word ${isCorrect ? "text-green-500" : "text-red-500"}`}
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
