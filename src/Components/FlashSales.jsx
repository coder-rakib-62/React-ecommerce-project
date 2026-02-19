import React from "react";
import Container from "./Container";
import SecHead from "./SecHead";
import Counter from "./Counter";
import Flex from "./Flex";
import Console from "../assets/Console.png";
import Chair from "../assets/Chair.png";
import Keyboard from "../assets/Keyboard.png";
import Monitor from "../assets/Monitor.png";
import Card from "./Card";
import Slider from "react-slick";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const FlashSales = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="absolute -top-20 right-3 w-10.5 h-11.5 bg-[#F5F5F5] rounded-full flex justify-center items-center"
        onClick={onClick}
      >
        <FaArrowRight className="text-black text-2xl" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="absolute -top-20 right-16 w-10.5 h-11.5 bg-[#F5F5F5] rounded-full flex justify-center items-center"
        onClick={onClick}
      >
        <FaArrowLeft className=" text-black text-xl" />
      </div>
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="mt-38.5">
      <Container>
        <Flex className="gap-21.75">
          <SecHead title="Today’s" heading="Flash Sales" />
          <Counter />
        </Flex>
        <Slider {...settings} className="mt-10">
          <Card
            imgSrc={Console}
            title="HAVIT HV-G92 Gamepad"
            discountPrice="120"
            Price="160"
            review="88"
            percentage="40"
          />
          <Card
            imgSrc={Keyboard}
            title="HAVIT HV-G92 Gamepad"
            discountPrice="120"
            Price="160"
            review="88"
            percentage="35"
          />
          <Card
            imgSrc={Monitor}
            title="HAVIT HV-G92 Gamepad"
            discountPrice="120"
            Price="160"
            review="88"
            percentage="30"
          />
          <Card
            imgSrc={Chair}
            title="HAVIT HV-G92 Gamepad"
            discountPrice="120"
            Price="160"
            review="88"
            percentage="25"
          />
          <Card
            imgSrc={Console}
            title="HAVIT HV-G92 Gamepad"
            discountPrice="120"
            Price="160"
            review="88"
            percentage="40"
          />
          <Card
            imgSrc={Keyboard}
            title="HAVIT HV-G92 Gamepad"
            discountPrice="120"
            Price="160"
            review="88"
            percentage="35"
          />
          <Card
            imgSrc={Monitor}
            title="HAVIT HV-G92 Gamepad"
            discountPrice="120"
            Price="160"
            review="88"
            percentage="30"
          />
          <Card
            imgSrc={Chair}
            title="HAVIT HV-G92 Gamepad"
            discountPrice="120"
            Price="160"
            review="88"
            percentage="25"
          />
        </Slider>
      </Container>
    </div>
  );
};

export default FlashSales;
