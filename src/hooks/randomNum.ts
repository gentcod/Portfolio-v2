import { useState, useEffect } from "react";

export const useRandomNumber = (intervalInDays: number, bound: number) => {
   const [randomNumber, setRandomNumber] = useState(() => {
      const savedData = JSON.parse(localStorage.getItem("randomNumberData") || "{}");
      const interval = intervalInDays * 24 * 60 * 60 * 1000;
      const now = Date.now();

      if (savedData.timestamp && now - savedData.timestamp < interval) {
         return savedData.number;
      }

      const newNumber = Math.floor(Math.random() * bound);
      localStorage.setItem(
         "randomNumberData",
         JSON.stringify({ number: newNumber, timestamp: now })
      );
      return newNumber;
   });

   useEffect(() => {
      const interval = intervalInDays * 24 * 60 * 60 * 1000;

      const timeoutId = setTimeout(() => {
         const newNumber = Math.floor(Math.random() * bound);
         setRandomNumber(newNumber);
         localStorage.setItem(
            "randomNumberData",
            JSON.stringify({ number: newNumber, timestamp: Date.now() })
         );
      }, interval);

      return () => clearTimeout(timeoutId);
   }, [intervalInDays,bound]);

   return randomNumber;
};
