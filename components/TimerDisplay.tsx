"use client";

import { useState, useEffect } from "react";
import {
  useTypingTest,
  useTypingTestComputed,
} from "@/contexts/TypingTestContext";

export default function TimerDisplay() {
  const { settings, testState } = useTypingTest();
  const { getTimeRemaining } = useTypingTestComputed();
  const [timeLeft, setTimeLeft] = useState(settings.duration);

  useEffect(() => {
    if (testState.status === "running" && testState.startTime) {
      const interval = setInterval(() => {
        setTimeLeft(getTimeRemaining());
      }, 100);

      return () => clearInterval(interval);
    }
  }, [testState.status, testState.startTime, getTimeRemaining]);

  return <p className="text-xl font-semibold text-gray-700">{timeLeft.toFixed(1)}s</p>;
}
