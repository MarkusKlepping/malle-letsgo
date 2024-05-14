"use client";
import React, { useEffect, useState } from "react";

export default function LidlReturn() {
  const [lidlReturn, setLidlReturn] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lidlReturnPerDay = 114800000000 / 365;
    const lidlReturnPerSecond = lidlReturnPerDay / 86400;

    const endDate = new Date("2024-08-01");

    const updateLidlReturn = () => {
      const now = new Date(); // Current date and time
      const timeDiff = endDate.getTime() - now.getTime();
      const secondsDiff = Math.max(0, Math.floor(timeDiff / 1000));

      const newAmountOfBürgergeld = Math.floor(
        lidlReturnPerSecond * secondsDiff
      );
      setLidlReturn(newAmountOfBürgergeld);
      setIsLoading(false);
    };

    const interval = setInterval(updateLidlReturn, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      ... erwirtschaftet Lidl noch ca{" "}
      {isLoading ? "calculating" : lidlReturn.toLocaleString()}€.
    </div>
  );
}
