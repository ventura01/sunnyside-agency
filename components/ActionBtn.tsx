import React from "react";
import { Fraunces } from "next/font/google";

type ButtonProps = {
  name: string;
};
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["700", "900"],
});

const ActionBtn = (props: ButtonProps) => {
  return (
    <button className={`${fraunces.className} uppercase font-bold relative`}>
      <span className="peer z-10">{props.name}</span>
      <span className="peer-hover:bg-yellow rounded-full scale-x-0 peer-hover:scale-x-110 transition-all w-full block h-3 z-0 top-4"></span>
    </button>
  );
};

export default ActionBtn;
