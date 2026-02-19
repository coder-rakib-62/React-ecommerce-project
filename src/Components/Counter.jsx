import React, { useEffect, useState } from "react";
import { countDownDateAndTime } from "countdown-date-time";
import Flex from "./Flex";
const Counter = () => {
  const conduct_date = "2027-01-18 00:00:00";
  const [count, setCount] = useState({});
  useEffect(() => {
    setInterval(() => {
      const countdown = countDownDateAndTime(conduct_date);
      setCount(countdown);
    }, 1000);
  }, []);
  console.log(count);
  return (
    <Flex className="gap-7.5 items-center">
      <div>
        <h2 className="text-xs font-medium ">Days</h2>
        <h2 className="text-[32px] font-bold">{count.days}</h2>
      </div>
        <h2 className="text-4xl text-primary">:</h2>
      <div>
        <h2 className="text-xs font-medium ">Hours</h2>
        <h2 className="text-[32px] font-bold">{count.hours}</h2>
      </div>
      <h2 className="text-4xl text-primary">:</h2>
      <div>
        <h2 className="text-xs font-medium ">Minutes</h2>
        <h2 className="text-[32px] font-bold">{count.minutes}</h2>
      </div>
      <h2 className="text-4xl text-primary">:</h2>
      <div>
        <h2 className="text-xs font-medium ">Seconds</h2>
        <h2 className="text-[32px] font-bold">{count.seconds}</h2>
      </div>
    </Flex>
  );
};

export default Counter;
