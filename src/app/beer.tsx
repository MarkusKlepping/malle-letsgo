"use client";
import React, { useEffect, useState } from "react";

export default function BeerCounter() {
  const [beerCount, setBeerCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const beerPerDay = 88000 / 365;
    const beerPerSecond = beerPerDay / 86400;

    const endDate = new Date("2024-08-01");

    const updateBeerCount = () => {
      const now = new Date();
      const timeDiff = endDate.getTime() - now.getTime();
      const secondsDiff = Math.max(0, Math.floor(timeDiff / 1000));

      const newAmountOfBeer = Math.floor(beerPerSecond * secondsDiff);
      setBeerCount(newAmountOfBeer);
      setIsLoading(false);
    };

    const interval = setInterval(updateBeerCount, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      ... trinkt ein Deutscher noch ca{" "}
      {isLoading ? "calculating..." : beerCount.toLocaleString()} ml Bier.
    </div>
  );
}
