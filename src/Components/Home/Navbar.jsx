import React from "react";
import { FaAngleDown } from "react-icons/fa";
import logo from "../../assets/CollageLogo.png";

const Navbar = () => {
  return (
    <div>
      <div className="h-[7rem] w-[100vw] bg-[#fff]">
        <div className="flex items-center justify-between mx-10">
          <div className="w-[20rem] flex items-center justify-start">
            <img src={logo} alt="" className="h-[5.5rem] mt-5" />
            <div className="text-[1.25rem] font-bold text-[#f98d2f] uppercase flex flex-col justify-center mt-4">
              <p className="text-[1.5rem]">Suguna</p>
              <p className="text-[1.15rem] text-[#83acb0] font-bold uppercase">
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

        <div className="flex  items-center justify-around mt-5 bg-[#f8e4d2] h-[2rem]">
          <ul className="flex gap-10 font-normal text-[18px]">
            <li className="hover:text-[#f98d2f]">Home</li>
            <li className="hover:text-[#f98d2f]">About</li>
            <li className="hover:text-[#f98d2f]">Department</li>
            <li className="flex items-center hover:text-[#f98d2f]">
              Facilities
            </li>
            <li className="hover:text-[#f98d2f]">Admissions</li>
            <li className="hover:text-[#f98d2f]">Placements</li>
            <li className="hover:text-[#f98d2f]">Gallery</li>
            {/* <li className="hover:text-[#f98d2f]">COURSES</li> */}
            <li className="flex items-center hover:text-[#f98d2f]">
              {/* PAGES <FaAngleDown className="mt-1" /> */}
              Contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
