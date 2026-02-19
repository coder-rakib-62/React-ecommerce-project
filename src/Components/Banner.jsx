import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { MdKeyboardArrowRight } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BannerImg from "../assets/banner.jpg";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div className="">
        <ul style={{ margin: "0px" }} className="absolute -top-16.25 left-88">
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3.5 h-3.5 rounded-full bg-gray-400">
        {/* {i + 1} */}
      </div>
    ),
  };
  return (
    <>
      <nav className="border-t border-gray-400">
        <Container>
          <Flex>
            <div className="border-r border-gray-400">
              <ul className="flex flex-col gap-y-4 w-54.25  pr-5.5 pt-10 font-poppins font-normal">
                <li className="flex justify-between items-center">
                  Woman’s Fashion <MdKeyboardArrowRight />
                </li>
                <li className="flex justify-between items-center">
                  Men’s Fashion <MdKeyboardArrowRight />
                </li>
                <li>Electronics</li>
                <li>Home & Lifestyle</li>
                <li>Medicine</li>
                <li>Sports & Outdoor</li>
                <li>Baby’s & Toys</li>
                <li>Groceries & </li>
                <li>Health & Beauty</li>
              </ul>
            </div>
            <div className="w-full   ml-12.5 mt-10">
              <Slider {...settings}>
                <div>
                  <img src={BannerImg} alt="" />
                </div>
                <div>
                  <img src={BannerImg} alt="" />
                </div>
                <div>
                  <img src={BannerImg} alt="" />
                </div>
                <div>
                  <img src={BannerImg} alt="" />
                </div>
              </Slider>
            </div>
          </Flex>
        </Container>
      </nav>
    </>
  );
};

export default Banner;
