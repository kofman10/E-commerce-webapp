import React from "react";
import { useState } from 'react';

function Counter({quantity, handleQuantity}) {


  return (
    <div>
      <div className="counter flex items-center text-lg justify-start">
        Quantity
        <div className="ml-5 border flex">
        <div onClick={() => handleQuantity("dec")} className="bg-[#fff] text-black w-12 h-10 flex items-center justify-center  cursor-pointer">
          -
        </div>
        <div className="w-12 h-10 flex items-center justify-center border-[1px] border-[#fff]">
          {quantity}
        </div>
        <div onClick={() => handleQuantity("inc")} className="bg-[#fff] text-black w-12 h-10 flex items-center justify-center cursor-pointer">
          +
        </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
