/*과도한 요청, 처리를 수행하게 될 경우 발생할 수 있는 
성능 저하를 막기 위해 이를 효과적으로 제어하여 성능을 개선하는 방법;
연속적으로 호출되는 함수 중 마지막 함수만 호출*/

import { useState, useEffect } from "react";

export function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
