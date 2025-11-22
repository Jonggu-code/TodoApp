import { useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const stored =
        typeof window !== 'undefined' ? localStorage.getItem(key) : null;
      if (stored !== null) {
        setValue(JSON.parse(stored));
      }
    } catch (err) {
      console.warn(
        `Failed to parse localStorage item for key "${key}". Using initial value.`,
      );
    } finally {
      setLoading(false);
    }
  }, [key]);

  const setStoredValue: React.Dispatch<React.SetStateAction<T>> = (
    newValue,
  ) => {
    setValue((prev) => {
      const valueToStore =
        typeof newValue === 'function'
          ? (newValue as (prev: T) => T)(prev)
          : newValue;

      if (valueToStore === undefined) {
        console.warn(
          `skipping localStorage update for key "${key}" because value is undefined`,
        );
        return prev;
      }

      try {
        localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (err) {
        console.warn(`Failed to set localStorage for key "${key}".`, err);
      }

      return valueToStore;
    });
  };

  return { value, setValue: setStoredValue, loading } as const;
}
