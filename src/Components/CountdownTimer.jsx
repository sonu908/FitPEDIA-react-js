import { useEffect, useState } from "react";
import {
  AiFillPlayCircle,
  AiOutlineReload,
} from "react-icons/ai";

function CountdownTimer() {
  const [countdownValue, setCountdownValue] = useState(60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setCountdownValue((prevValue) => prevValue - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };



  const reset = () => {
    setCountdownValue(60);
    setIsRunning(false);

  };

  return (
    <div className="text-center border-red-700 border rounded-2xl p-6 w-1/4 cursor-grab">
     <p className=" tracking-widest">Lets do it !</p>
      <div className="gap-3 text-center flex m-auto">
        <AiFillPlayCircle className="text-8xl" onClick={handleStart} />
        <div>
        <span className="countdown font-mono text-8xl text-red-700">
          <span style={{ "--value": countdownValue }}></span>
        </span>
      </div>        <AiOutlineReload className="text-8xl" onClick={reset} />
      </div>
    </div>
  );
}

export default CountdownTimer;
