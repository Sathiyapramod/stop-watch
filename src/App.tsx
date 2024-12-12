import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [hrs, setHrs] = useState<number>(0);
  const [min, setMin] = useState<number>(0);
  const [sec, setSec] = useState<number>(0);

  const [isRunning, setRunning] = useState<boolean>(false);
  const intervalRef = useRef<void>(null);

  const handleStart = () => {
    if (!isRunning)
      intervalRef.current = setInterval(() => {
        setSec((s) => {
          if (s > 59) {
            setMin((m) => {
              if (m > 59) {
                setHrs((hr) => hr + 1);
                return 0;
              }
              return m + 1;
            });
            return 0;
          } else return s + 1;
        });
      }, 1000);
    setRunning(true);
  };

  const handleStop = () => {
    if (isRunning) {
      setRunning(false);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
  };

  const handleReset = () => {
    handleStop();
    setHrs(0);
    setMin(0);
    setSec(0);
  };

  return (
    <>
      <h4>Stop watch</h4>
      <div>
        {String(hrs).padStart(2, '0')}:{String(min).padStart(2, '0')}:
        {String(sec).padStart(2, '0')}
      </div>
      <button onClick={handleStart} disabled={isRunning}>
        start
      </button>
      <button onClick={handleStop} disabled={!isRunning}>
        stop
      </button>
      <button onClick={handleReset} disabled={isRunning}>
        reset
      </button>
    </>
  );
}

export default App;
