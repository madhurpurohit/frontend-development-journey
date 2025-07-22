import { useEffect, useState } from "react";
import "./index.css";

export const CleanUp = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect Run");
    const interval = setInterval(() => {
      console.log("Timer Executed");

      setCount((prev) => prev + 1);
    }, 3000);

    return () => {
      console.log("Timer Unmount");

      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container">
      <div className="counter">
        <p>My Subscribers on Youtube</p>
        <div className="odometer" id="odometer">
          {count}
        </div>
        <h3 className="title">
          Subscribers <br /> Realtime Counter
        </h3>
      </div>
    </div>
  );
};
