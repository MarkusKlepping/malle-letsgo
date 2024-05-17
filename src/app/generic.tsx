"use client";
import React, { useEffect, useState } from "react";
interface GenericCounterProps {
  label: string;
  totalAmount: number;
  unit: string;
}

export default function GenericCounter({ label, totalAmount, unit }: GenericCounterProps) {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const endDate = new Date("2024-08-01"); 

    const amountPerDay = totalAmount / 365;
    const amountPerSecond = amountPerDay / 86400;

    const updateCount = () => {
      const now = new Date();
      const timeDiff = endDate.getTime() - now.getTime();
      const secondsDiff = Math.max(0, Math.floor(timeDiff / 1000));

      const newAmount = Math.floor(amountPerSecond * secondsDiff);
      setCount(newAmount);
      setIsLoading(false);
    };

    const interval = setInterval(updateCount, 1000);

    return () => clearInterval(interval);
  }, [totalAmount]);

  return (
    <div className="p-4 h-24 bg-white shadow rounded-lg text-center">
      {label} {isLoading ? "calculating..." : count.toLocaleString()} {unit}.
    </div>
  );
}
