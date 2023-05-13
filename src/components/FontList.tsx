import arrowDown from "../assets/icon-arrow-down.svg";

interface fontListPtops {
  check: boolean;
  chooseFont: boolean;
  setChooseFont: (chooseFont: boolean) => void;
  switchFont: number;
  setSwitchFont(switchFont: number): void;
}
const FontList = ({
  check,
  chooseFont,
  setChooseFont,
  switchFont,
  setSwitchFont,
}: fontListPtops): JSX.Element => {
  const showHide = (): void => {
    setChooseFont(!chooseFont);
  };
  return (
    <div onClick={showHide} className="flex gap-[16px] items-center relative">
      <h5
        className={` font-bold text-[18px] leading-6 cursor-pointer ${
          check ? "text-[2D2D2D]" : "text-white"
        }`}
      >
        {switchFont === 1 ? "San-serif" : switchFont === 2 ? "Serif" : "Mono"}
      </h5>

      <img className="cursor-pointer " src={arrowDown} alt="Arrow down" />

      <div
        className={` ${
          chooseFont ? "flex" : "hidden"
        } flex-col items-start p-6 gap-[16px] w-[183px] h-[152px] rounded-[16px] ${
          check
            ? "shadow-colorwhite bg-white"
            : "shadow-colorblack bg-[#1F1F1F]"
        } absolute right-0 top-[40px] `}
      >
        <h5
          onClick={() => {
            setSwitchFont(1);
          }}
          className={` font-bold text-[18px] leading-6 hover:text-[#A445ED] cursor-pointer ${
            check ? "text-[2D2D2D]" : "text-white"
          }`}
        >
          Sans serif
        </h5>

        <h5
          onClick={() => {
            setSwitchFont(2);
          }}
          className={` font-bold text-[18px] leading-6 hover:text-[#A445ED] cursor-pointer ${
            check ? "text-[2D2D2D]" : "text-white"
          }`}
        >
          Serif
        </h5>

        <h5
          onClick={() => {
            setSwitchFont(3);
          }}
          className={` font-bold text-[18px] leading-6 hover:text-[#A445ED] cursor-pointer ${
            check ? "text-[2D2D2D]" : "text-white"
          }`}
        >
          Mono
        </h5>
      </div>
    </div>
  );
};

export default FontList;
