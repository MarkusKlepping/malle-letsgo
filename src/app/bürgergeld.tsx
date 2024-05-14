"use client";
import React, { useEffect, useState } from "react";

export default function BürgerGeldCounter() {
  const [bürgergeld, setBürgergeld] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const bürgergeldPerDay = 26500000000 / 365;
    const bürgergeldPerSecond = bürgergeldPerDay / 86400;

    const endDate = new Date("2024-08-01");

    const updateBürgergeld = () => {
      const now = new Date();
      const timeDiff = endDate.getTime() - now.getTime();
      const secondsDiff = Math.max(0, Math.floor(timeDiff / 1000));

      const newAmountOfBürgergeld = Math.floor(
        bürgergeldPerSecond * secondsDiff
      );
      setBürgergeld(newAmountOfBürgergeld);
      setIsLoading(false);
    };

    const interval = setInterval(updateBürgergeld, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      ... werden noch ca.{" "}
      {isLoading ? "calculating..." : bürgergeld.toLocaleString()}€ an
      Bürgergeld ausgezahlt.
    </div>
  );
}
