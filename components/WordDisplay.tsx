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
      return <span className="word text-gray-400">{word}</span>;
    }

    if (isTyped && !isCurrent) {
      // Completed words - show character-by-character if we have typedText
      if (typedText && typedText.length > 0) {
        const chars = word.split("");
        const typedChars = typedText.split("");

        return (
          <span className="word">
            {chars.map((char, index) => {
              const typedChar = typedChars[index];
              let className = "";

              // Character hasn't been typed yet
              if (typedChar === undefined) {
                className = "char-upcoming";
              }
              // Character matches correctly
              else if (typedChar === char) {
                className = "char-correct";
              }
              // Character doesn't match
              else {
                className = "char-incorrect";
              }

              return (
                <span key={index} className={className}>
                  {char}
                </span>
              );
            })}
          </span>
        );
      }

      // Fallback: show color if we've explicitly set correctWords (for backwards compatibility)
      return (
        <span
          className={`word ${
            isCorrect === true
              ? "text-green-600"
              : isCorrect === false
              ? "text-red-600"
              : "text-gray-700"
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

          // Character hasn't been typed yet
          if (typedChar === undefined) {
            // If it's the first untyped character, mark it as current
            if (index === 0 || typedChars[index - 1] !== undefined) {
              className = "char-current";
            } else {
              className = "char-upcoming";
            }
          }
          // Character matches correctly
          else if (typedChar === char) {
            className = "char-correct";
          }
          // Character doesn't match
          else {
            className = "char-incorrect";
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
