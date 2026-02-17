import React from "react";
import { TiThLarge } from "react-icons/ti";

const SecHead = ({ title, heading }) => {
  return (
    <div>
      <h6 className="text-primary flex gap-4 items-center font-semibold">
        <div className="w-5 h-10 bg-primary rounded-sm "></div>
        {title}
      </h6>

      <h2 className="text-4xl font-semibold mt-6">{heading}</h2>
    </div>
  );
};

export default SecHead;
