import { useState, useRef } from "react";
import ResultModal from "./ResultModal";
export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  const [timeRemaining, settimeRemaining] = useState(targetTime * 1000);
  const timerisActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }
  function handleReset() {
    settimeRemaining(targetTime * 1000);
  }
  function handleStart() {
    timer.current = setInterval(() => {
      settimeRemaining((prevtimeRemaining) => prevtimeRemaining - 10);
    }, 10);
  }
  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }
  return (
    <>
      <ResultModal
        ref={dialog}
        remainingTime={timeRemaining}
        targetTime={targetTime}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p>
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerisActive ? handleStop : handleStart}>
            {timerisActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerisActive ? "active" : undefined}>
          {timerisActive ? "Timer is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
