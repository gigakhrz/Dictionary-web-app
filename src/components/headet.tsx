import logoImg from "../assets/logo.svg";
import arrowDown from "../assets/icon-arrow-down.svg";
import { useState } from "react";

interface headerProps {
  check: boolean;
  setCheck: (check: boolean) => void;
}

const Header = ({ check, setCheck }: headerProps): JSX.Element => {
  const chnageColor = (): void => {
    setCheck(!check);
  };

  return (
    <div className="w-full flex justify-between items-center">
      <img src={logoImg} alt=" logo " />

      <div className="flex gap-[16px]">
        <div className="flex gap-[16px] items-center">
          <h5
            className={` font-bold text-[18px] leading-6 ${
              check ? "text-[2D2D2D]" : "text-white"
            }`}
          >
            Sans serif
          </h5>

          <img src={arrowDown} alt="Arrow down" />
        </div>

        <hr className=" border-none w-[1px] h-[32px] bg-[#E9E9E9]" />

        <div className="flex items-center justify-center gap-[20px]">
          <label
            className={` w-[40px] h-[20px] appearence-none outline-none ${
              check ? "bg-[#757575] " : "bg-[#A445ED]"
            } rounded-[10px] relative `}
          >
            <input
              type="checkbox"
              className="w-0 h-0 opacity-0"
              onClick={chnageColor}
            />
            <span
              className="sspan absolute cursor-pointer right-0 top-0 left-0 bottom-0 rounded-[10px]
           transition duration-400 sm:transition-none after:absolute after:content-'' after:h-[16px] after:w-[16px]
            after:rounded-full after:left-[3px] after:bottom-[2.5px]  after:bg-white after:transition after:duration-400 after:sm:transition-none"
            ></span>
          </label>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
          >
            <path
              fill="none"
              className={` ${check ? "stroke-[#838383]" : "stroke-[#A445ED]"} `}
              d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
