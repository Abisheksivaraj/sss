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
            <div className="w-[3rem] md:w-[5rem] lg:w-[7rem] ">
              <img src={logo} alt="" className="h-auto object-contain" />
            </div>
            <div className="font-bold text-[#f98d2f] uppercase flex flex-col justify-center mt-4 w-full">
              <p className="text-10px text-[rgb(249,141,47)] md:text-[1.2rem]">
                Suguna
              </p>
              <p className="text-10px text-83acb0 font-bold uppercase  text-[#83acb0] md:text-[1.2rem]">
                Polytechnic College
              </p>
            </div>
          </div>
          <div>
            <a
              className="hidden rounded-tl-3xl rounded-br-3xl text-white bg-[#f98d2f] hover:bg-[#83acb0] md:block p-2 lg:text-[1.5rem]"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeUdQIqy8IW6vnzEX5GrmVE6bzUGXEOD0A5Zd4wOLXCwbV4EA/viewform"
            >
              For Admission
            </a>
          </div>
        </div>
        <div className="relative" onClick={toggleMode}>
          <ImMenu3 className="h-8 w-8 mt-auto lg:hidden absolute top-[-2rem] right-0 md:hidden" />
        </div>

        {/* navbar starts */}

        <div className=" md:items-center md:justify-center md:mt-5 md:bg-[#f8e4d2] lg:bg-[#f8e4d2] h-10 relative z-10">
          <ul
            className={`bg-[#f8e4d2]  w-full absolute top-0 left-10px gap-5 font-normal text-18px cursor-pointer p-2 h-auto flex flex-col 
            md:flex md:w-[full] md:flex-row md:items-center md:justify-between md:text-center rounded-md md:text-[0.9rem] lg:text-[1.3rem] ${
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
                className={`flex-col bg-white w-[13rem] text-[18px] rounded-tl-none rounded-bl-md rounded-r-md p-2
                
                md:absolute md:top-[2rem] md:bg-[#f8e4d2] 
                ${activeDropDown === "AboutUs" ? "" : "hidden"}`}
              >
                <li className="hover:text-[#f98d2f] text-[16px]">Management</li>
                <li className="hover:text-[#f98d2f] text-[16px]">
                  Principal message
                </li>
                <li className="hover:text-[#f98d2f] text-[16px]">Awards</li>
                <li className="hover:text-[#f98d2f] text-[16px]">
                  Professional Bodies
                </li>
              </ul>
            </span>

            <span className="hover:text-[#f98d2f] flex  justify-start items-center gap-1 relative group">
              Departments <GoChevronDown onClick={toggleAcademicsDropDown} />
            </span>
            <ul
              className={`bg-white items-center gap-2 w-[35%] rounded-tl-none rounded-bl-md rounded-r-md p-2
              md:absolute md:top-[2rem] md:bg-[#f8e4d2] md:text-start md:left-[10rem]  md:rounded-tl-none md:rounded-bl-md md:rounded-r-md md:p-2
              2xl:left-[22rem] 2xl:top-[2.8rem] 

              ${isAcademicsDropDownVisible ? "" : "hidden"}`}
            >
              <li className="hover:text-[#f98d2f] text-[16px]">
                Mechanical Engineering
              </li>
              <li className="hover:text-[#f98d2f] text-[16px]">
                Automobile Engineering
              </li>
              <li className="hover:text-[#f98d2f] text-[16px]">AI&ML</li>
              <li className="hover:text-[#f98d2f] text-[16px]">
                Electrical and Electronics Engineering
              </li>
              <li className="hover:text-[#f98d2f] text-[16px]">
                Electronics and Communication Engineering
              </li>
              <li className="hover:text-[#f98d2f] text-[16px]">
                Electrical and Electronics Engineering
              </li>
            </ul>

            <span className="hover:text-[#f98d2f] flex justify-start items-center gap-1 relative group">
              Facilities <GoChevronDown onClick={toggleFacilitiesDropDown} />
            </span>

            <ul
              className={`bg-white w-[full] rounded-tl-none rounded-bl-md rounded-r-md p-2
              
              md:absolute md:top-[2rem] md:bg-[#f8e4d2] md:text-start md:left-[19rem]  md:rounded-tl-none md:rounded-bl-md md:rounded-r-md md:p-2
              ${isFacilitiesDropDownVisible ? "" : "hidden"}`}
            >
              <li className="hover:text-[#f98d2f] text-[16px]">Library</li>
              <li className="hover:text-[#f98d2f] text-[16px]">Transport</li>
              <li className="hover:text-[#f98d2f] text-[16px]">Hostel</li>
              <li className="hover:text-[#f98d2f] text-[16px]">NSS</li>
            </ul>

            <span className="hover:text-[#f98d2f] flex  justify-start items-center gap-1 relative group">
              Club/Events <GoChevronDown onClick={toggleEventsDropDown} />
            </span>
            <ul
              className={`bg-white w-[full] rounded-tl-none rounded-bl-md rounded-r-md p-2  md:absolute md:top-[2rem] md:bg-[#f8e4d2] md:text-start md:left-[25rem]  md:rounded-tl-none md:rounded-bl-md md:rounded-r-md md:p-2 ${
                isEventsDropDownVisible ? "" : "hidden"
              }`}
            >
              <li className="hover:text-[#f98d2f] text-[16px]">Library</li>
              <li className="hover:text-[#f98d2f] text-[16px]">Transport</li>
              <li className="hover:text-[#f98d2f] text-[16px]">Hostel</li>
              <li className="hover:text-[#f98d2f] text-[16px]">NSS</li>
            </ul>

            <span className="hover:text-[#f98d2f] flex  justify-start items-center gap-1 relative group">
              Placements <GoChevronDown onClick={togglePlacementsDropDown} />
            </span>
            <ul
              className={`bg-white w-[full] rounded-tl-none rounded-bl-md rounded-r-md p-2 md:absolute md:top-[2rem] md:bg-[#f8e4d2] md:text-start md:left-[33rem]  md:rounded-tl-none md:rounded-bl-md md:rounded-r-md md:p-2 lg:left-[42rem] lg:top-[2.2rem] ${
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
