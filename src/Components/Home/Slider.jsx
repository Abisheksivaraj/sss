import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../../../src/assets/carousal-images/1.jpg";
import img2 from "../../../src/assets/carousal-images/2.jpg";
import img3 from "../../../src/assets/carousal-images/3.jpg";
import img4 from "../../../src/assets/carousal-images/4.jpg";
import img5 from "../../../src/assets/carousal-images/5.jpg";
import img6 from "../../../src/assets/carousal-images/6.jpg";
import img7 from "../../../src/assets/carousal-images/7.jpg";
import img8 from "../../../src/assets/carousal-images/8.jpg";
import img9 from "../../../src/assets/carousal-images/9.jpg";

const Slider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className=" mt-[3.1rem] p-4">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={2500}
        autoPlay={true}
      >
        <div className="relative">
          <img src={img1} alt="" className="w-screen h-[200px]" />
        </div>

        <div className="relative ">
          <img src={img2} alt="" className="w-screen h-[200px]" />
        </div>

        <div className="relative ">
          <img src={img3} alt="" className="w-screen h-[200px]" />
        </div>

        <div className="relative">
          <img src={img4} alt="" className="w-screen h-[200px]" />
        </div>

        <div className="relative">
          <img src={img5} alt="" className="w-screen h-[200px]" />
        </div>

        <div className="relative">
          <img src={img6} alt="" className="w-screen h-[200px]" />
        </div>

        <div className="relative">
          <img src={img7} alt="" className="w-screen h-[200px]" />
        </div>

        <div className="relative">
          <img src={img8} alt="" className="w-screen h-[200px]" />
        </div>

        <div className="relative">
          <img src={img9} alt="" className="w-screen h-[200px]" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
