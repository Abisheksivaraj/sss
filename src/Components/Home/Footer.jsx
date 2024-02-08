import React from "react";
import FooterLogo from "../../assets/CollageLogo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const FooterPage = () => {
  return (
    <div>
      <div className="w-full mt-[10rem] bg-black flex flex-col justify-start">
        <div className="w-full flex flex-row justify-start">
          <div className="w-[28%] flex flex-col gap-8 px-[5rem] pt-[5rem] pb-[0rem] items-center">
            <div className="flex flex-row gap-2 items-center">
              <img
                className="w-20 h-20 rounded-full"
                src={FooterLogo}
                alt="footer-logo"
              />
              <h1 className="text-[white] flex flex-col items-center">
                <span className="text-[#ff9637] text-[40px] border-b-[3px] border-b-orange-400 ">
                  SUGUNA
                </span>
                {/* <br />{" "} */}
                <span className=" text-[#83acb0] font-medium">
                  POLYTECHNIC COLLEGE
                </span>
              </h1>
            </div>
            <div className="flex gap-6">
              <div className="">
                <FaFacebookF className="bg-white hover:bg-[#ff9637] hover:text-white cursor-pointer w-12 h-12 p-3 text-[#ff9637] rounded-full hover:scale-[0.9] transition-all delay-100"></FaFacebookF>
              </div>
              <div className="">
                <FaTwitter className="bg-white hover:bg-[#ff9637] hover:text-white cursor-pointer w-12 h-12 p-3 text-[#ff9637] rounded-full hover:scale-[0.9] transition-all delay-100"></FaTwitter>
              </div>
              <div className="">
                <FaInstagramSquare className="bg-white hover:bg-[#ff9637] hover:text-white cursor-pointer w-12 h-12 p-3 text-[#ff9637] rounded-full hover:scale-[0.9] transition-all delay-100"></FaInstagramSquare>
              </div>
              <div className="">
                <FaYoutube className="bg-white hover:bg-[#ff9637] hover:text-white cursor-pointer w-12 h-12 p-3 text-[#ff9637] rounded-full hover:scale-[0.9] transition-all delay-100"></FaYoutube>
              </div>
            </div>
          </div>
          <div className="w-[23%] p-[5rem] pt-[4rem] pb-[3rem] ">
            <h1 className="text-white text-[2rem] font-bold pb-2">
              Quick Links
            </h1>
            <ul className="text-white text-[20px]  ">
              <li className=" hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward></IoIosArrowForward>About Us
                </a>
              </li>
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward></IoIosArrowForward>Awards
                </a>
              </li>
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward></IoIosArrowForward>Facilities
                </a>
              </li>
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward></IoIosArrowForward>Departments
                </a>
              </li>
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward></IoIosArrowForward>Anti-Ragging Committee
                </a>
              </li>
            </ul>
          </div>
          <div className="w-[24%] p-[5.5rem] pt-[7rem] pb-[3rem]">
            <ul className="text-white text-[20px] ">
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward></IoIosArrowForward>Admission
                </a>
              </li>
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                {" "}
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward></IoIosArrowForward>Scholarship
                </a>
              </li>
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward></IoIosArrowForward>Our Recruiters
                </a>
              </li>
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward></IoIosArrowForward>Placements
                </a>
              </li>
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward></IoIosArrowForward>Photo Gallery
                </a>
              </li>
            </ul>
          </div>
          <div className="w-[25%] p-[3rem] pt-[4rem] pb-[3rem]">
            <h1 className="text-[white] text-[2rem] font-bold pb-2">
              Our Institutions
            </h1>
            <ul className="text-[white] text-[20px]">
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward></IoIosArrowForward>Suguna College of Arts
                  and Science
                </a>
              </li>
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward></IoIosArrowForward>Suguna College of
                  Engineering
                </a>
              </li>
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward></IoIosArrowForward>Suguna PIP School
                </a>
              </li>
              <li className="hover:text-[#ff9637] cursor-pointer pb-2">
                <a
                  className="flex items-center gap-2 hover:scale-[0.9] transition-all duration-[600ms]"
                  href=""
                >
                  <IoIosArrowForward></IoIosArrowForward>Suguna Innovation
                  Institute
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-row justify-evenly items-center pb-[3.5rem]">
          <div className="flex justify-around items-center gap-2  ">
            <IoCall className="text-[#ff9637] text-[3rem]"></IoCall>
            <div>
              <span className="text-[white] text-[20px]">+91 8870008623</span>
              <br />
              <span className="text-[white] text-[20px]">+91 9600860934</span>
            </div>
          </div>
          <div className=" flex items-center gap-2 ">
            <div className="flex items-center gap-2">
              <MdEmail className="text-[#ff9637] text-[3rem] "></MdEmail>
              <div>
                <span className="text-[white] text-[20px] ">
                  sugunapolytechniccollege@gmail.com
                </span>
              </div>
            </div>
          </div>
          <div className="flex  items-center gap-2">
            <a href="https://www.google.com/maps/place/Suguna+Polytechnic+College/@11.0509439,77.0322591,15z/data=!4m6!3m5!1s0x3ba857bbffffffff:0xfaed96bd33545bc0!8m2!3d11.0509439!4d77.0322591!16s%2Fg%2F1tl7m4b8?entry=ttu">
              <FaLocationDot className="text-[#ff9637] text-[3rem]"></FaLocationDot>
            </a>
            <div className="items-center">
              <span className="text-[white] font-bold text-[20px]">
                Kalapatti Main Rd, near Vinayaka Temple, GKD Nagar,
              </span>
              <br />
              <span className="text-[white] text-[20px]">
                Nehru Nagar West, Coimbatore, Tamil Nadu - 641014
              </span>
            </div>
          </div>
        </div>
        <div className="w-full items-center text-center pt-[rem] pb-[3rem]">
          <span className="text-[#979696] text-center items-center text-[20px]">
            Copyright © 2023 Suguna Polytechnic College
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
