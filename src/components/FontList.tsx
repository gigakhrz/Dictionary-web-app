import arrowDown from "../assets/icon-arrow-down.svg";

interface fontListPtops {
  check: boolean;
}
const FontList = ({ check }: fontListPtops): JSX.Element => {
  return (
    <div className="flex gap-[16px] items-center">
      <h5
        className={` font-bold text-[18px] leading-6 ${
          check ? "text-[2D2D2D]" : "text-white"
        }`}
      >
        Sans serif
      </h5>

      <img src={arrowDown} alt="Arrow down" />

      <div></div>
    </div>
  );
};

export default FontList;
