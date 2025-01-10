import React, { useState } from "react";

const Button = ({ btnText }) => {
  const [count, setCount] = useState(0);
  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button className="my-btn" onClick={incrementCounter}>
        {btnText} {count}
      </button>
    </>
  );
};

export default Button;
