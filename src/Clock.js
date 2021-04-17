import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  // Still runs in background after you toggle clock off
  // useEffect(() => {
  //   setInterval(() => {
  //     setTime(new Date());
  //   }, 1000);
  // }, []);


  // Stops updating state this way after button is clicked.
  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date())
      // console.log(timerID)
      
    }, 1000);

    // returning a cleanup function
    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);


  return <div>{time.toString()}</div>;
}

export default Clock;
