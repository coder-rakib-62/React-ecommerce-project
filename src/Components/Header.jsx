import React from "react";
import Container from "./Container";
import Flex from "./Flex";

const Header = () => {
  return (
    <div className="bg-black py-3">
      <Container>
        <Flex className="justify-center">
          <div className="w-[70%] flex justify-end">
            <p className="text-white font-poppins font-normal">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
              <a href="#" className="font-poppins font-normal text-sm">ShopNow</a>
            </p>
          </div>
          <div className="w-[20%] flex justify-end">
            <select name="language" className="text-white font-poppins font-normal text-sm ">
              <option value="English" className="text-black">English</option>
              <option value="Bangla" className="text-black">Bangla</option>
              <option value="Hindi" className="text-black">Hindi</option>
              <option value="Arabic" className="text-black">Arabic</option>
            </select>
          </div>
        </Flex>
      </Container>
    </div>
  );
};  
export default Header;
