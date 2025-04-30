import React from "react";
import { useEffect, useState } from "react";
const TodoDate = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const Timea = now.toLocaleTimeString();
      setDateTime(`${formattedDate}- ${Timea}`);
    }, 1000);

    return () => clearInterval();
  }, []);
  return <h2 className="date-time">{dateTime}</h2>;
};

export default TodoDate;
