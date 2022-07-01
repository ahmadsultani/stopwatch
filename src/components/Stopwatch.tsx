import { useState, useEffect } from 'react';

import Timer from './Timer';

import './Stopwatch.css'

function Stopwatch() {
  const [time, setTime] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval : any = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((time) => time+10)
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    }
  }, [isRunning]);

  function handleRun() {
    setIsRunning(!isRunning);
  }

  function handleReset() {
    setTime(0);
  }

  return (  
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <Timer time={time}/>
      <div className="btn-container">
        <button className="btn" onClick={handleRun}>{isRunning ? 'Stop' : 'Start'}</button>
        <button className="btn" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
