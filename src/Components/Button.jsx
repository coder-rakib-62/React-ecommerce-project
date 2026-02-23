import React from "react";

const Button = ({ text }) => {
  return (
    <>
      <div className="flex text-center  justify-center items-center">
        <button className="pt-4 pb-4 px-12 py-12 text-[#FAFAFA] bg-primary font-poppins font-medium rounded mt-9.5 ">
          {text}
        </button>
      </div>
    </>
  );
};

export default Button;
