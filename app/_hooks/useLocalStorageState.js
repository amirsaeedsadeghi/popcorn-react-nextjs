import { useEffect, useState } from "react";

export function useLocalStorageState(initialValue, key) {
  const [value, setValue] = useState(() => {
    const storedData = localStorage.getItem(key);
    return !storedData ? initialValue : JSON.parse(storedData);
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );
  return [value, setValue];
}
