import React from "react";
import Navbar from "./Components/Home/Navbar";
import Slider from "../src/Components/Home/Slider";
import FooterPage from "./Components/Home/Footer";
import VisionMission from "../src/Components/Home/VisionMission";

const App = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <VisionMission />
      <FooterPage />
    </div>
  );
};

export default App;
