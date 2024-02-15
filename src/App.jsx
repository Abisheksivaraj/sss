import React from "react";
import Navbar from "./Components/Home/Navbar";
import Slider from "../src/Components/Home/Slider";
import FooterPage from "./Components/Home/Footer";
import VisionMission from "../src/Components/Home/VisionMission";
import Facilities from "./Components/Home/Facilities";
import Recruiters from "../src/Components/Home/Recruiters";

const App = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <VisionMission />
      <Facilities />
      <Recruiters />
      <FooterPage />
    </div>
  );
};

export default App;
