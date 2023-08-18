import React, { useState, useEffect, createContext } from 'react';

const TimerContext = createContext();

const PomodoroTimer = () => {
  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTime(25 * 60);
    setIsRunning(false);
  };

  return (
    <TimerContext.Provider value={{ time, startTimer, pauseTimer, resetTimer }}>
      <div>
        <h1>Pomodoro Timer</h1>
        <div>Time: {time}</div>
        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </TimerContext.Provider>
  );
};

export default PomodoroTimer;