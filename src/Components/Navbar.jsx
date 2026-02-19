import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Logo from "../assets/Exclusive.png";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <Container className="py-7">
        <Flex className="justify-around items-center">
          <div>
            <img src={Logo} alt="" />
          </div>
          <ul className="flex gap-12 relative font-poppins font-normal">
            <li>
              <a href="" className="under">
                Home
              </a>
            </li>
            <li>
              <a href="" className="under">
                Contact
              </a>
            </li>
            <li>
              {" "}
              <a href="" className="under">
                About
              </a>
            </li>
            <li>
              {" "}
              <a href="" className="under">
                Sign Up
              </a>
            </li>
          </ul>
          <Flex className="items-center gap-6">
            <div className="relative">
              <input
                type="text"
                className="py-2.5 px-5 pr-17.5 bg-[#F5F5F5] font-poppins font-normal"
                placeholder="What are you looking for?"
              />
              <FaMagnifyingGlass className="absolute top-3 right-3" />
            </div>
            <Flex className="items-center text-3xl gap-4">
              <IoIosHeartEmpty />
              <IoCartOutline />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default Navbar;
