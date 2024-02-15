import React from "react";
import vision from "../../assets/vision.jpg";

const VisionMission = () => {
  return (
    <div className="flex flex-col items-center justify-between p-4">
      <div>
        <img
          src={vision}
          className="h-[20rem] w-[20rem]  pt-[5rem] opacity-75 sm:h-[25rem] sm:w-[25rem] md:h-[30rem] md:w-[30rem] lg:h-[40rem] lg:w-[45rem] xl:h-[50rem] xl:w-[60rem] 2xl:h-[60rem] 2xl:w-[70rem]"
          alt=""
        />
        <div className="relative">
          <div className="border-l-2"></div>
          <p className="h-[9rem] p-3 w-[18rem] bg-white absolute top-[-9rem] left-[2rem] rounded-tl-3xl  opacity-85 font-semibold text-[gray] sm:top-[-9rem] sm:left-[8rem] md:left-[12rem] lg:left-[20rem] lg:h-[15rem] lg:top-[-14rem] lg:p-3 lg:w-[25rem] text-[1rem] xl:left-[35rem] 2xl:text-[2rem] 2xl:left-[37rem] 2xl:top-[-20rem] 2xl:h-[20rem] 2xl:w-[33rem] lg:text-[1.6rem]">
            “Education is the most powerful weapon which you can use to change
            the world”
            <br />
            <br /> <span className="text-[black]"> - Nelson Mandela</span>
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full pt-10">
        <div>
          <p className="text-[#f98d2f] text-[1.5rem] md:text-[2rem] font-bold 2xl:text-[3rem]">
            Our Vision
          </p>
          <p className="w-[22rem] text-[gray]  text-[1rem] sm:w-[38rem] md:w-[46rem] lg:w-[60rem] lg:text-[1.5rem]  xl:w-[75rem] xl:text-[1.7rem] 2xl:w-[90rem] 2xl:text-[2.2rem]">
            In Suguna Polytechnic College we impart futuristic technical
            education and inculcate high moral standards and discipline through
            our dedicated faculty, thus develop technologically superior and
            ethically stronger students, who contribute to the prosperity of the
            society and the Nation.
          </p>
        </div>
        <br />
        <div>
          <p className="text-[#f98d2f] text-[1.5rem] md:text-[2rem] font-bold 2xl:text-[3rem]">
            Our Mission
          </p>
          <p className="w-[22rem] text-[gray] text-[1rem] sm:w-[38rem] md:w-[46rem]  lg:w-[60rem] lg:text-[1.5rem]  xl:w-[75rem] xl:text-[1.9rem]  2xl:w-[90rem] 2xl:text-[2.2rem]">
            Our Mission is to educate and impart technical knowledge to students
            from all sections of society, with special focus on those from rural
            areas, so that they become enlightened individuals, thereby
            improving the living standard of their families and society.
          </p>
        </div>
        <br />
        <div>
          <p className="text-[#f98d2f] text-[1.5rem] md:text-[2rem] font-bold 2xl:text-[3rem]">
            Our Policy
          </p>
          <p className="w-[22rem] text-[gray] text-[1rem] sm:w-[38rem] md:w-[46rem] lg:w-[60rem] lg:text-[1.5rem] xl:w-[75rem] xl:text-[1.7rem] 2xl:w-[90rem] 2xl:text-[2.2rem]">
            In Suguna Polytechnic College we impart futuristic technical
            education and inculcate high moral standards and discipline through
            our dedicated faculty, thus develop technologically superior and
            ethically stronger students, who contribute to the prosperity of the
            society and the Nation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
