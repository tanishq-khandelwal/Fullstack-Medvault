import React, { useState, useEffect } from "react";

const CountingAnimation = ({ totalCount }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let animationInterval;
    if (count < totalCount) {
      animationInterval = setInterval(() => {
        setCount((prevCount) => Math.min(prevCount + 1, totalCount));
      }, 100); // Adjust the interval for speed
    } else {
      clearInterval(animationInterval);
    }

    return () => clearInterval(animationInterval);
  }, [count, totalCount]);

  return (
    <div className="p-10 flex flex-col justify-center items-center bg-slate-200 rounded-3xl border border-[#82818166] shadow-xl backdrop-blur-lg backdrop-filter">
      <h1 className="font-bold text-[24px]">Total Patient Count</h1>
      <h1 className="font-bold text-[36px] text-sky-500">{count}</h1>
    </div>
  );
};

export default CountingAnimation;
