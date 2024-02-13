import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { ImMenu3 } from "react-icons/im";
import logo from "../../assets/CollageLogo.png";

function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [activeDropDown, setActiveDropDown] = useState(null);

  function toggleMode() {
    setIsMenuVisible((prevState) => !prevState);
  }

  const toggleDropDown = (dropdownName) => {
    if (activeDropDown === dropdownName) {
      // If the clicked dropdown is already active, close it
      setActiveDropDown(null);
    } else {
      setActiveDropDown(dropdownName);
    }
  };

  const [isAcademicsDropDownVisible, setIsAcademicsDropDownVisible] =
    useState(false);
  const [isFacilitiesDropDownVisible, setIsFacilitiesDropDownVisible] =
    useState(false);
  const [isEventsDropDownVisible, setIsEventsDropDownVisible] = useState(false);
  const [isPlacementsDropDownVisible, setIsPlacementsDropDownVisible] =
    useState(false);

  const toggleAcademicsDropDown = () => {
    setIsAcademicsDropDownVisible(!isAcademicsDropDownVisible);
    // Toggle other dropdowns off
    setIsFacilitiesDropDownVisible(false);
    setIsEventsDropDownVisible(false);
    setIsPlacementsDropDownVisible(false);
    setActiveDropDown("Academics");
  };

  const toggleFacilitiesDropDown = () => {
    setIsFacilitiesDropDownVisible(!isFacilitiesDropDownVisible);
    // Toggle other dropdowns off
    setIsAcademicsDropDownVisible(false);
    setIsEventsDropDownVisible(false);
    setIsPlacementsDropDownVisible(false);
    setActiveDropDown("Facilities");
  };

  const toggleEventsDropDown = () => {
    setIsEventsDropDownVisible(!isEventsDropDownVisible);
    // Toggle other dropdowns off
    setIsAcademicsDropDownVisible(false);
    setIsFacilitiesDropDownVisible(false);
    setIsPlacementsDropDownVisible(false);
    setActiveDropDown("Events");
  };

  const togglePlacementsDropDown = () => {
    setIsPlacementsDropDownVisible(!isPlacementsDropDownVisible);
    // Toggle other dropdowns off
    setIsAcademicsDropDownVisible(false);
    setIsFacilitiesDropDownVisible(false);
    setIsEventsDropDownVisible(false);
    setActiveDropDown("Placements");
  };

  return (
    <div className="p-4">
      {/* head section */}

      <div className="w-full bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <div className="h-10 md:w-[5rem]">
              <img src={logo} alt="" className="w-full h-auto object-contain" />
            </div>
            <div className="font-bold text-[#f98d2f] uppercase flex flex-col justify-center mt-4 w-full">
              <p className="text-13px text-[rgb(249,141,47)] md:text-[1.2rem]">
                Suguna
              </p>
              <p className="text-13px text-83acb0 font-bold uppercase  text-[#83acb0] md:text-[1.2rem]">
                Polytechnic College
              </p>
            </div>
          </div>
          <div>
            <a
              className="hidden rounded-tl-3xl rounded-br-3xl text-white bg-[#f98d2f] hover:bg-[#83acb0] md:block p-2"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeUdQIqy8IW6vnzEX5GrmVE6bzUGXEOD0A5Zd4wOLXCwbV4EA/viewform"
            >
              For Admission
            </a>
          </div>
        </div>
        <div className="relative" onClick={toggleMode}>
          <ImMenu3 className="h-8 w-8 mt-auto lg:hidden absolute top-[-2.3rem] right-0 md:hidden" />
        </div>

        {/* navbar starts */}

        <div className=" md:items-center md:justify-center md:mt-5 md:bg-[#f8e4d2] lg:bg-[#f8e4d2] h-10 relative">
          <ul
            className={`w-full absolute top-0 left-10px gap-5 font-normal text-18px cursor-pointer p-2 h-auto flex flex-col 
            md:flex md:w-[full] md:flex-row md:items-center md:justify-between md:text-center rounded-md md:text-[0.9rem]  ${
              isMenuVisible ? "" : "hidden"
            }`}
          >
            <span className="hover:text-[#f98d2f] text-start">Home</span>

            <span
              className="hover:text-#f98d2f flex flex-col justify-start items-start gap-1 relative group text-start
            md:relative"
            >
              <span className="flex justify-center items-center">
                AboutUs
                <GoChevronDown onClick={() => toggleDropDown("AboutUs")} />
              </span>

              <ul
                className={`flex-col bg-white w-full rounded-tl-none rounded-bl-md rounded-r-md p-2
                
                md:absolute md:top-[2rem] md:bg-[#f8e4d2] 
                ${activeDropDown === "AboutUs" ? "" : "hidden"}`}
              >
                <li>Management</li>
                <li>principal message</li>
                <li>abi</li>
              </ul>
            </span>
            <span className="hover:text-[#f98d2f] flex  justify-start items-center gap-1 relative group">
              Departments <GoChevronDown onClick={toggleAcademicsDropDown} />
            </span>
            <ul
              className={`bg-white items-center gap-2 w-full rounded-tl-none rounded-bl-md rounded-r-md p-2
              md:absolute md:top-[2rem] md:bg-[#f8e4d2] md:text-start md:left-[10rem]  md:rounded-tl-none md:rounded-bl-md md:rounded-r-md md:p-2
              ${isAcademicsDropDownVisible ? "" : "hidden"}`}
            >
              <li>Mechanical Engineering</li>
              <li>Automobile Engineering</li>
              <li>AI&ML</li>
              <li>Electrical and Electronics Engineering</li>
              <li>Electronics and Communication Engineering</li>
              <li>Electrical and Electronics Engineering</li>
            </ul>

            <span className="hover:text-[#f98d2f] flex justify-start items-center gap-1 relative group">
              Facilities <GoChevronDown onClick={toggleFacilitiesDropDown} />
            </span>

            <ul
              className={`bg-white w-[full] rounded-tl-none rounded-bl-md rounded-r-md p-2
              
              md:absolute md:top-[2rem] md:bg-[#f8e4d2] md:text-start md:left-[19rem]  md:rounded-tl-none md:rounded-bl-md md:rounded-r-md md:p-2
              ${isFacilitiesDropDownVisible ? "" : "hidden"}`}
            >
              <li>Library</li>
              <li>Transport</li>
              <li>Hostel</li>
              <li>NSS</li>
            </ul>

            <span className="hover:text-[#f98d2f] flex  justify-start items-center gap-1 relative group">
              Club/Events <GoChevronDown onClick={toggleEventsDropDown} />
            </span>
            <ul
              className={`bg-white w-[full] rounded-tl-none rounded-bl-md rounded-r-md p-2  md:absolute md:top-[2rem] md:bg-[#f8e4d2] md:text-start md:left-[25rem]  md:rounded-tl-none md:rounded-bl-md md:rounded-r-md md:p-2 ${
                isEventsDropDownVisible ? "" : "hidden"
              }`}
            >
              <li>Library</li>
              <li>Transport</li>
              <li>Hostel</li>
              <li>NSS</li>
            </ul>

            <span className="hover:text-[#f98d2f] flex  justify-start items-center gap-1 relative group">
              Placements <GoChevronDown onClick={togglePlacementsDropDown} />
            </span>
            <ul
              className={`bg-white w-[full] rounded-tl-none rounded-bl-md rounded-r-md p-2 md:absolute md:top-[2rem] md:bg-[#f8e4d2] md:text-start md:left-[33rem]  md:rounded-tl-none md:rounded-bl-md md:rounded-r-md md:p-2 ${
                isPlacementsDropDownVisible ? "" : "hidden"
              }`}
            >
              <li>Library</li>
              <li>Transport</li>
              <li>Hostel</li>
              <li>NSS</li>
            </ul>

            <span className="hover:text-[#f98d2f] text-start">Alumni</span>
            <span className="hover:text-[#f98d2f] cursor-pointer text-start">
              Contact
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
