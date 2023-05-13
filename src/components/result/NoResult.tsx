import emoji from "../../assets/😕.png";

interface noResultProps {
  check: boolean;
}

const NoResult = ({ check }: noResultProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-11 items-center md:max-w-[737px] mt-[67px]">
      <img src={emoji} alt="emoji" />
      <div className="w-full flex flex-col gap-6 items-center justify-center">
        <h3
          className={`${
            check ? "text-[#2D2D2D]" : "text-white"
          } text-5 leading-6 font-bold`}
        >
          No Definitions Found
        </h3>

        <p
          className={`text-[#757575] font-normal text-center text-[15px] leading-6] md:text-[18px] leading-6`}
        >
          Sorry pal, we couldn't find definitions for the word you were looking
          for. You can try the search again at later time or head to the web
          instead.
        </p>
      </div>
    </div>
  );
};

export default NoResult;
