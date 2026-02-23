import SecHead from "./SecHead";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Category = () => {

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute -top-20 right-3 w-11 h-11 bg-[#F5F5F5] rounded-full flex justify-center items-center cursor-pointer"
        onClick={onClick}
      >
        <FaArrowRight className="text-black text-xl" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute -top-20 right-16 w-11 h-11 bg-[#F5F5F5] rounded-full flex justify-center items-center cursor-pointer"
        onClick={onClick}
      >
        <FaArrowLeft className="text-black text-xl" />
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
    <div className="relative">
      <SecHead 
        title="Categories" 
        heading="Browse By Category" 
      />

      <Slider {...settings} className="mt-15">
      </Slider>
    </div>
  );
};

export default Category;