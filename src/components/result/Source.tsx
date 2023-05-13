import { types } from "../../type";
import NewWindow from "../../assets/icon-new-window.svg";

interface SoruceProps {
  check: boolean;
  wordInfo: types | null;
}

const Source = ({ check, wordInfo }: SoruceProps): JSX.Element => {
  return (
    <div className="flex flex-col items center w-full gap-6 md:max-w-[737px]">
      <hr
        className={`border-none h-[1px] w-full ${
          check ? "bg-[#E9E9E9]" : "bg-[#3A3A3A]"
        }`}
      />

      <div className="flex flex-col gap-2 w-full">
        {" "}
        <h4
          className={`text-[#757575] text-[16px] leading-[19.3px] underline `}
        >
          Source
        </h4>
        <div className="flex gap-[9px] items-center">
          <a
            className={`text-[14px] underline leading-[16.94px] ${
              check ? "text-[#2D2D2D]" : "text-[#FFFFFF]"
            } font-normal`}
            href={wordInfo?.sourceUrls[0]}
            target="_blank"
          >
            {wordInfo?.sourceUrls[0]}
          </a>
          <img src={NewWindow} alt=" new tab " />
        </div>
      </div>
    </div>
  );
};

export default Source;
