import React, { useState, useEffect } from "react";
import "./App.css"
function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    return time.toLocaleTimeString('en-US', { hour12: true });
  };

  return (
    <div className="container">
      <h1 className="heading">Real-Time Clock</h1>
      <div className="clock">{formatTime(time)}</div>
    </div>
  );
}


export default App;
