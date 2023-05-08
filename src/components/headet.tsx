import logoImg from "../assets/logo.svg";
import arrowDown from "../assets/icon-arrow-down.svg";

const Header = (): JSX.Element => {
  return (
    <div className="w-full flex justify-between">
      <img src={logoImg} alt=" logo " />

      <div className="flex gap-[16px]">
        <div className="flex gap-[16px] items-center">
          <h5 className={` font-bold text-[18px] leading-6`}>Sans serif</h5>

          <img src={arrowDown} alt="Arrow down" />
        </div>

        <hr className=" border-none w-[1px] h-[32px] bg-[#E9E9E9]" />
      </div>
    </div>
  );
};

export default Header;
