import { useEffect, useState } from "react";

export function TimerComp() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerID);
  }, []);
  return (
    <>
      <div>
        <p>Timer on function </p>
      </div>
      <div>Now {time.toLocaleTimeString()}.</div>
    </>
  );
}
