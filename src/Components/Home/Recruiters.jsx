import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import apollo from "../../assets/placements/apollo.png";
import craftmanship from "../../assets/placements/craftman.png";
import hyundai from "../../assets/placements/hyundai.png";
import lnt from "../../assets/placements/l&t.png";
import led from "../../assets/placements/led.jpg";
import lmw from "../../assets/placements/lmw.png";
import murugappa from "../../assets/placements/murugappa.png";
import pricol from "../../assets/placements/pricol.png";
import roots from "../../assets/placements/roots.png";
import shanthi from "../../assets/placements/shanthi.png";
import tessolve from "../../assets/placements/tessolve.png";
import texmo from "../../assets/placements/texmo.png";
import zf from "../../assets/placements/zf.png";

const Recruiters = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 9,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="mt-[6rem]  font-semibold text-[1.5rem] text-[#f98d2f] underline">
      <div>
        <p className="text-center">OUR PRESTIGIOUS RECRUITERS</p>
      </div>
      <Carousel
        className="mt-10"
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={2500}
        autoPlay={true}
      >
        <div className="relative">
          <img src={apollo} alt="" className="w-[6rem] h-[3rem]" />
        </div>

        <div className="relative ">
          <img src={craftmanship} alt="" className="w-[6rem] h-[5rem]" />
        </div>

        <div className="relative ">
          <img src={hyundai} alt="" className="w-[6rem] h-[5rem]" />
        </div>

        <div className="relative">
          <img src={lnt} alt="" className="w-[6rem] h-[5rem]" />
        </div>

        <div className="relative ">
          <img src={led} alt="" className="w-[6rem] h-[5rem]" />
        </div>

        <div className="relative ">
          <img src={lmw} alt="" className="w-[6rem] h-[5rem]" />
        </div>

        <div className="relative">
          <img src={murugappa} alt="" className="w-[6rem] h-[5rem]" />
        </div>

        <div className="relative ">
          <img src={pricol} alt="" className="w-[6rem] h-[5rem]" />
        </div>

        <div className="relative ">
          <img src={roots} alt="" className="w-[6rem] h-[5rem]" />
        </div>

        <div className="relative">
          <img src={shanthi} alt="" className="w-[6rem] h-[5rem]" />
        </div>

        <div className="relative ">
          <img src={tessolve} alt="" className="w-[6rem] h-[5rem]" />
        </div>

        <div className="relative ">
          <img src={texmo} alt="" className="w-[6rem] h-[5rem]" />
        </div>

        <div className="relative">
          <img src={zf} alt="" className="w-[6rem] h-[5rem]" />
        </div>
      </Carousel>
    </div>
  );
};

export default Recruiters;
