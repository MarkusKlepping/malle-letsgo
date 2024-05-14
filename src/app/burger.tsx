"use client";
import React, { useEffect, useState } from "react";

export default function BurgerCounter() {
  const [burgersConsumed, setBurgersConsumed] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const burgersPerDay = 50000000000 / 365;
    const burgersPerSecond = burgersPerDay / 86400;

    const endDate = new Date("2024-08-01");

    const updateBurgersConsumed = () => {
      const now = new Date();
      const timeDiff = endDate.getTime() - now.getTime();
      const secondsDiff = Math.max(0, Math.floor(timeDiff / 1000));

      const newBurgersConsumed = Math.floor(burgersPerSecond * secondsDiff);
      setBurgersConsumed(newBurgersConsumed);
      setIsLoading(false);
    };

    const interval = setInterval(updateBurgersConsumed, 1000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div>
      ... werden noch ca{" "}
      {isLoading ? "calculating..." : burgersConsumed.toLocaleString()} burger
      in den USA gegessen.
    </div>
  );
}
