// src/utils/usePersistedState.ts
import { useState, useEffect, Dispatch, SetStateAction } from "react";

function usePersistedState<T>(
  key: string,
  initialState: T
): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialState;
    } catch (error) {
      console.error("Error parsing persisted state:", error);
      return initialState;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error("Error persisting state:", error);
    }
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
