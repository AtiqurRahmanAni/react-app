import React, { memo } from "react";

const Card = () => {
  for (let i = 0; i < 1000000000; i++) {}
  return (
    <div>
      This is a card
      <img src="" alt="" />
      <button>Buy now</button>
    </div>
  );
};

export default Card;
