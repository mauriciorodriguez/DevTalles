import { useState } from "react";

interface Options {
  initialValue?: number
}

export const useCounter = ({ initialValue = 0 }: Options) => {

  const [count, setCount] = useState<number>(initialValue);

  const increaseBy = (value: number) => {
    setCount(count + value)
  }

  return {
    count,
    increaseBy
  }
}
