import { useState } from "react";

interface UseProductInterface {
  counter: number;
  increaseBy: (value: number) => void;
}

export const useProduct = (): UseProductInterface => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {
    setCounter((prev) => Math.max(prev + value, 0));
  };

  return {
    counter,
    increaseBy,
  };
};
