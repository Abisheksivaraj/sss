import React from "react";
import Navbar from "../Components/Home/Navbar";
import Slider from "../../src/Components/Home/Slider";
import PrincipalMsg from "../../src/Components/Home/PrincipalMsg";
import VisionMission from "../../src/Components/Home/VisionMission";
import FooterPage from "../../src/Components/Home/Footer";
import Departments from "../../src/Components/Home/Department";
import Facilities from "../../src/Components/Home/Facilities";
import Recruiters from "../../src/Components/Home/Recruiters";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <div className="px-[2%]">
        <PrincipalMsg />
      </div>
      <div className="">
        <VisionMission />
      </div>
      <div className="">
        <Departments />
      </div>
      <div className="">
        <Facilities />
      </div>
      <div className="">
        <Recruiters />
      </div>

      <FooterPage />
    </div>
  );
};

export default HomePage;
