"use client"
import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";
import GenericCounter from "./generic";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeZone = 'Europe/Berlin';
    const endDate = DateTime.fromISO('2024-12-21T20:00:00', { zone: timeZone }).toUTC();

    const calculateTimeLeft = () => {
      const now = DateTime.now().setZone(timeZone);
      const timeDiff = endDate.diff(now, ['days', 'hours', 'minutes', 'seconds']).toObject();
      const days = Math.floor(timeDiff.days || 0);
      const hours = Math.floor(timeDiff.hours || 0);
      const minutes = Math.floor(timeDiff.minutes || 0);
      const seconds = Math.floor(timeDiff.seconds || 0);

      return { days, hours, minutes, seconds };
    };

    const updateTimeLeft = () => {
      setTimeLeft(calculateTimeLeft());
      setIsLoading(false); 
    };

    const interval = setInterval(updateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center p-6 bg-gray-100">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">Bis zu unserem RendezVOUZ in ALT CITY...</h1>
        <div className="text-lg text-center bg-white p-4 rounded-lg shadow-md text-black">
          {
            isLoading ? "Wird berechnet..." : 
            `${timeLeft.days} Tage, ${timeLeft.hours} Stunden, ${timeLeft.minutes} Minuten, ${timeLeft.seconds} Sekunden`
          }
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto text-black ">
        
          <GenericCounter label="... werden noch ca." totalAmount={26500000000} unit="€ an Bürgergeld ausgezahlt" />
          <GenericCounter label="... wird uns der Bundestag noch." totalAmount={1200000000} unit="€ kosten" />
          <GenericCounter label="... wird die DB noch" totalAmount={3700800} unit="Minuten zu spät kommen" />
          <GenericCounter label="... werden noch ca." totalAmount={50000000000} unit="Burger in den USA gegessen" />
          <GenericCounter label="... wird Lidl noch ca." totalAmount={114800000000} unit="€ an Umsatz generieren" />
          
        </div>
        <h2 className="text-black text-center">Lasst euch nicht ärgern</h2>
      </div>
    </main>
  );
}
