import React from "react";
import Flex from "./Flex";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const Card = ({ imgSrc, title, discountPrice, Price, review, percentage }) => {
  return (
    <>
      <div className="group w-67.5 ">
        <div className="relative overflow-hidden">
          <img src={imgSrc} alt="" />
          <Flex className="justify-between absolute top-0 left-0 w-full p-3">
            <h3 className="bg-primary py-1 px-3 rounded-sm text-[#FAFAFA] h-fit">
              -{percentage}%
            </h3>
            <div>
              <div className="w-8.5 h-8.5 rounded-full bg-white flex justify-center items-center">
                <FaRegHeart />
              </div>
              <div className="w-8.5 h-8.5 rounded-full bg-white mt-2 flex justify-center items-center">
                <FaRegEye />
              </div>
            </div>
          </Flex>
        <button className="bg-black text-white py-2 w-full absolute -bottom-10 group-hover:bottom-0 left-0 duration-300 ease-linear">
          Add To Cart
        </button>
        </div>
        <h2 className="font-poppins font-medium mt-4">{title}</h2>
        <Flex className="gap-3">
          <h3 className="text-primary font-poppins font-medium ">
            ${discountPrice}
          </h3>
          <h3 className="line-through font-poppins font-medium">${Price}</h3>
        </Flex>
        <Flex className="gap-2 items-center">
          <Flex className="text-amber-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </Flex>
          <h3 className="font-poppins font-semibold">({review})</h3>
        </Flex>
      </div>
    </>
      );
};

export default Card;
