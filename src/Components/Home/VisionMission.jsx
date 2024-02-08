import React from "react";
import vision from "../../assets/vision.jpg";

const VisionMission = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <img
          src={vision}
          className="h-[25rem] w-[50rem] ml-10 mt-[5rem] opacity-75 relative"
          alt=""
        />
        <div>
          <div className="border-l-2"></div>
          <p className="h-[9rem] p-3 w-[18rem] bg-white absolute top-[93rem] left-[13rem] rounded-tl-3xl rounded-br-3xl opacity-85 font-semibold text-[gray]">
            “Education is the most powerful weapon which you can use to change
            the world”
            <br />
            <br /> <span className="text-[black]"> - Nelson Mandela</span>
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full ml-[8rem] mt-[8rem]">
        <div>
          <p className="text-[#f98d2f] text-[1.5rem] font-bold">Our Vision</p>
          <p className="w-[40rem] text-[gray]">
            In Suguna Polytechnic College we impart futuristic technical
            education and inculcate high moral standards and discipline through
            our dedicated faculty, thus develop technologically superior and
            ethically stronger students, who contribute to the prosperity of the
            society and the Nation.
          </p>
        </div>
        <br />
        <div>
          <p className="text-[#f98d2f] text-[1.5rem] font-bold"> Our Mission</p>
          <p className="w-[40rem] text-[gray]">
            Our Mission is to educate and impart technical knowledge to students
            from all sections of society, with special focus on those from rural
            areas, so that they become enlightened individuals, thereby
            improving the living standard of their families and society.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
