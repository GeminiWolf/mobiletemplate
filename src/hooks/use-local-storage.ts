import { useEffect, useState } from "react";

export default function useLocalStorage(key: string, defaultValue: string ) {
  const [value, setValue] = useState(() => {
    const savedValue: any = localStorage.getItem(key);

    return savedValue !== "undefined" ? JSON.parse(savedValue) : defaultValue;
  });

  useEffect(() => {
    if (key) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}
