import React from "react";
import { FaAngleDown } from "react-icons/fa";
import logo from "../../assets/CollageLogo.png";
import { GoChevronDown } from "react-icons/go";
import { ImMenu3 } from "react-icons/im";
import JobPopUp from "./popup";

import { useState } from "react"; // Import useState hook

function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  function toggleMode() {
    setIsMenuVisible((prevState) => !prevState);
  }

  return (
    <div>
      <div className="h-[7rem] w-[100vw] bg-[#fff]">
        <div className="flex items-center justify-between mx-10">
          <div className="w-[20rem] flex items-center justify-start">
            <img src={logo} alt="" className="h-[5.5rem] mt-5" />
            <div className=" font-bold text-[#f98d2f] uppercase flex flex-col  justify-center mt-4 w-full">
              <p className="text-[2rem]">Suguna</p>
              <p className="text-[1.7rem] text-[#83acb0] font-bold uppercase w-[21rem]">
                Polytechnic College
              </p>
            </div>
          </div>

          <div>
            <a
              className="p-4 px-9 rounded-tl-3xl rounded-br-3xl text-[white] bg-[#f98d2f] hover:bg-[#83acb0] font-semibold"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeUdQIqy8IW6vnzEX5GrmVE6bzUGXEOD0A5Zd4wOLXCwbV4EA/viewform"
            >
              For Admission
            </a>
          </div>
        </div>
        <div className="relative" onClick={toggleMode}>
          <ImMenu3 className="h-[2rem] w-[2rem] ml-auto mt-auto lg:hidden absolute top-0 right-0" />
        </div>
        <div className="flex  items-center justify-around mt-5 bg-[#f8e4d2] h-[2.5rem]">
          <ul
            className={`gap-10 font-normal text-[18px] cursor-pointer lg:flex sm:hidden  ${
              isMenuVisible ? "" : "hidden"
            }`}
          >
            <span className="hover:text-[#f98d2f]">Home</span>

            <span className="hover:text-[#f98d2f] flex justify-center items-center gap-1 relative group">
              AboutUs <GoChevronDown />
              <ul className="absolute top-6 left-0 bg-green-300 w-56 rounded-tl-none rounded-bl-md rounded-r-md p-2 hidden group-hover:block">
                <li>Management</li>
                <li>principal message</li>
                <li>abi</li>
              </ul>
            </span>
            <span className="hover:text-[#f98d2f] flex justify-center items-center gap-1 relative group">
              Deparments <GoChevronDown />
              <ul className="absolute top-6 left-0 bg-green-300 w-[25rem] rounded-tl-none rounded-bl-md rounded-r-md p-2 hidden group-hover:block">
                <li>Mechanical Engineering</li>
                <li>Automobile Engineering</li>
                <li>AI&ML</li>
                <li>Electrical and Electronics Engineering</li>
                <li>Electronics and Communication Engineering</li>
                <li>Electrical and Electronics Engineering</li>
              </ul>
            </span>
            <span className="hover:text-[#f98d2f] flex justify-center items-center gap-1 relative group">
              Academics <GoChevronDown />
              <ul className="absolute top-6 left-0 bg-green-300 w-[25rem] rounded-tl-none rounded-bl-md rounded-r-md p-2 hidden group-hover:block">
                <li>Mechanical Engineering</li>
                <li>Automobile Engineering</li>
                <li>AI&ML</li>
                <li>Electrical and Electronics Engineering</li>
                <li>Electronics and Communication Engineering</li>
                <li>Electrical and Electronics Engineering</li>
              </ul>
            </span>
            <span className="hover:text-[#f98d2f] flex justify-center items-center gap-1 relative group">
              Facilities <GoChevronDown />
              <ul className="absolute top-6 left-0 bg-green-300 w-[10rem] rounded-tl-none rounded-bl-md rounded-r-md p-2 hidden group-hover:block">
                <li>Library</li>
                <li>Transport</li>
                <li>Hostel</li>
                <li>NSS</li>
              </ul>
            </span>
            <span className="hover:text-[#f98d2f] flex justify-center items-center gap-1 relative group">
              Club/Events <GoChevronDown />
              <ul className="absolute top-6 left-0 bg-green-300 w-[10rem] rounded-tl-none rounded-bl-md rounded-r-md p-2 hidden group-hover:block">
                <li>Library</li>
                <li>Transport</li>
                <li>Hostel</li>
                <li>NSS</li>
              </ul>
            </span>

            <span className="hover:text-[#f98d2f] flex justify-center items-center gap-1 relative group">
              Placements <GoChevronDown />
              <ul className="absolute top-6 left-0 bg-green-300 w-[10rem] rounded-tl-none rounded-bl-md rounded-r-md p-2 hidden group-hover:block">
                <li>Library</li>
                <li>Transport</li>
                <li>Hostel</li>
                <li>NSS</li>
              </ul>
            </span>
            <li className="hover:text-[#f98d2f]">Alumini</li>
            {/* Add a dropdown */}

            <li
              className="relative group"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <span className="flex items-center hover:text-[#f98d2f] cursor-pointer">
                Contact
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <JobPopUp></JobPopUp>
      </div>
    </div>
  );
}

export default Navbar;
