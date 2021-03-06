import React, { useState, useCallback,useEffect } from 'react';


const SimpleHabit = () => {
  const [count, setCount] = useState(0); // 초기값 0
  const spanRef = React.useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  useEffect(()=>{
    console.log(`mounted & update : ${count}`)
  }, [count]);


  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button
        className="habit-button habit-increase"
        onClick={handleIncrement}
      >
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
}
export default SimpleHabit;
