import logoImg from "../assets/logo.svg";
import FontList from "./FontList";
import { useState } from "react";

interface headerProps {
  check: boolean;
  setCheck: (check: boolean) => void;
  switchFont: number;
  setSwitchFont(switchFont: number): void;
}

const Header = ({
  check,
  setCheck,
  switchFont,
  setSwitchFont,
}: headerProps): JSX.Element => {
  const chnageColor = (): void => {
    setCheck(!check);
  };
  const [chooseFont, setChooseFont] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-between items-center">
      <img className="w-[28px] h-[32px]" src={logoImg} alt=" logo " />

      <div className="flex gap-[16px]">
        <FontList
          check={check}
          chooseFont={chooseFont}
          setChooseFont={setChooseFont}
          switchFont={switchFont}
          setSwitchFont={setSwitchFont}
        />

        <hr className=" border-none w-[1px] h-[32px] bg-[#E9E9E9]" />

        <div className="flex items-center justify-center gap-[20px]">
          <label
            className={`tablet:ml-[1.625rem] relative inline-block w-[40px] h-[20px] ${
              check ? "bg-[#757575]" : "bg-[#A445ED]"
            } rounded-[10px]`}
          >
            <input
              className="peer opacity-0 w-0 h-0"
              type="checkbox"
              onClick={chnageColor}
            />
            <span className="absolute cursor-pointer inset-0 rounded-[10px] bg-gray dark:bg-purple before:absolute before:content-[''] before:h-[14px] before:w-[14px] before:rounded-full before:left-[3px] before:bottom-[3px] before:bg-white peer-focus-visible:bg-violet-500 peer-checked:before:translate-x-[20px] before:transition-all"></span>
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
