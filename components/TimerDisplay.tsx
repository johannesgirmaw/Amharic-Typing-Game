"use client";

import { useState, useEffect } from "react";

interface TimerDisplayProps {
  startTime: number;
  duration: number;
}

export default function TimerDisplay({
  startTime,
  duration,
}: TimerDisplayProps) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = (Date.now() - startTime) / 1000;
      setTimeLeft(Math.max(0, Math.ceil(duration - elapsed)));
    }, 100);

    return () => clearInterval(interval);
  }, [startTime, duration]);

  return <p className="text-2xl font-bold">{timeLeft}s</p>;
}
