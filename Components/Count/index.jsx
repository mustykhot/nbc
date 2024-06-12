import { useEffect, useState } from "react";
import { numberWithCommas } from "utils/utils";

const Count = ({ number, duration = 2, startCount }) => {
  // number displayed by component
  const [count, setCount] = useState("0");

  useEffect(() => {
    if (startCount) {
      let start = 0;
      const end = parseInt(number.substring(0, 3));
      // if zero, return
      if (start === end) return;

      // find duration per increment
      let incrementTime = (duration / end) * 1000;

      // timer increments start counter
      // then updates count
      // ends if start reaches end
      let timer = setInterval(() => {
        start += 1;
        setCount(String(start) + number.substring(3));
        if (start === end) clearInterval(timer);
      }, incrementTime);
    }

    // dependency array
  }, [number, duration, startCount]);

  return <span>{numberWithCommas(count)}</span>;
};

export default Count;
