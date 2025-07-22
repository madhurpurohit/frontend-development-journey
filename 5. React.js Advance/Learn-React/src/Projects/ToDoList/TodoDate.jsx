import { useEffect, useState } from "react";

export const TodoDate = () => {
  const [dateTime, setDateTime] = useState("");

  //* To prevent memory leak we use useEffect hook.
  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const formattedDate = date.toDateString();
      const formattedTime = date.toLocaleTimeString();

      setDateTime(`${formattedDate} ${formattedTime}`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <h2 className="date-time">{dateTime}</h2>;
};
