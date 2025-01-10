import { useState } from "react";

export interface ILocalStorageReturn {
   key: string;
   value?: string;
};

export const useLocalStorage = (key: string, defaulValue: string): ILocalStorageReturn => {
   const [value, setValue] = useState(() => {
      let currentValue;

      try {

      } catch (error) {
         console.log(error);
         return currentValue 
      }
   })

   return { key, value}
}