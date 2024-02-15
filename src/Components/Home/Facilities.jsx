import React from "react";

import placement from "../../assets/facilities/placements.jpg";
import library from "../../assets/facilities/library.jpg";
import transport from "../../assets/facilities/transport.jpg";
import hostel from "../../assets/facilities/hostel.jpg";
import ragging from "../../assets/facilities/ragging.png";
import ncc from "../../assets/facilities/ncc.jpg";

const Facilities = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-center mt-[5rem]">
        <p className="font-semibold uppercase ml-5 text-[1.5rem] text-[#f98d2f] underline xl:text[1.8rem] 2xl:text[2rem]">
          Why Suguna
        </p>
      </div>

      <div className=" flex flex-col place-items-center justify-center gap-10 mt-10 ml-3 md:flex-row">
        <div>
          <img
            src={placement}
            alt=""
            className="h-[10rem] w-[10rem] border-[5px] rounded-full border-[#83acb0] p-1"
          />
          <p className="text-center font-semibold text-[#f98d2f]  xl:text[1.5rem]">
            Placements
          </p>
        </div>

        <div>
          <img
            src={library}
            alt=""
            className="h-[10rem] w-[10rem] border-[5px] rounded-full border-[#83acb0] p-1"
          />
          <p className="text-center font-semibold text-[#f98d2f] xl:text[1.5rem]">
            Library
          </p>
        </div>

        <div>
          <img
            src={transport}
            alt=""
            className="h-[10rem] w-[10rem] border-[5px] rounded-full border-[#83acb0] p-1"
          />
          <p className="text-center font-semibold text-[#f98d2f] xl:text[1.5rem]">
            Transport
          </p>
        </div>

        <div>
          <img
            src={hostel}
            alt=""
            className="h-[10rem] w-[10rem] border-[5px] rounded-full border-[#83acb0] p-1"
          />
          <p className="text-center font-semibold text-[#f98d2f] xl:text[1.5rem]">
            Hostel
          </p>
        </div>

        <div>
          <img
            src={ragging}
            alt=""
            className="h-[10rem] w-[10rem] border-[5px] rounded-full border-[#83acb0] p-1"
          />
          <p className="text-center font-semibold text-[#f98d2f] xl:text[1.5rem]">
            Anti Ragging
          </p>
        </div>

        <div>
          <img
            src={ncc}
            alt=""
            className="h-[10rem] w-[10rem] border-[5px] rounded-full border-[#83acb0] p-1"
          />
          <p className="text-center font-semibold text-[#f98d2f] xl:text[1.5rem]">
            NCC
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
