import React from "react";
import { GoArrowRight } from "react-icons/go";
import { GrLineChart } from "react-icons/gr";
import { BsArrowsCollapseVertical } from "react-icons/bs";

const JobPopUp = () => {
  return (
    <div>
      <div className="w-[16rem] h-[11rem] bg-[#f8e4d2] border-2 border-black absolute top-[10rem] left-[18rem] rounded-md px-6 z-10 hidden">
        <div className="w-full flex items-center py-4 gap-6">
          {/* <div>
            <BsArrowsCollapseVertical className="bg-slate-100 hover:bg-orange-50 ... cursor-pointer w-[3rem] h-[3rem] py-2 rounded-md" />
          </div> */}
          <span>About Us</span>
          <div>
            <GoArrowRight className="" />
          </div>
        </div>
        <div className="w-full flex justify-start items-center py-4 gap-6">
          {/* <div>
            <GrLineChart className="bg-slate-100 hover:bg-orange-50 ... cursor-pointer w-[3rem] h-[3rem] py-2 rounded-md" />
          </div> */}
          <span>Managements</span>
          <div>
            <GoArrowRight />
          </div>
        </div>
        <div className="w-full flex justify-start items-center py-4 gap-6">
          {/* <div>
            <GrLineChart className="bg-slate-100 hover:bg-orange-50 ... cursor-pointer w-[3rem] h-[3rem] py-2 rounded-md" />
          </div> */}
          <span>Our Mission & Vission</span>
          <div>
            <GoArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPopUp;
