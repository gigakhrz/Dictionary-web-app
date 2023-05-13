import { types } from "../../type";
import playImg from "../../assets/icon-play.svg";
import { useRef } from "react";
interface succesProps {
  wordInfo: types | null;
  check: boolean;
}

const ResultHeader = ({ wordInfo, check }: succesProps): JSX.Element => {
  const audioRef = useRef<HTMLAudioElement>(null);

  // Filters the array, selects only those that do not contain an empty string, and then selects the first element from the new array.
  const audioUrl = wordInfo?.phonetics
    .filter((phonetic) => phonetic.audio !== "")
    .map((phonetic) => phonetic.audio)[0];

  // play and pause
  const handleClick = () => {
    const audio = audioRef.current;

    if (audio) {
      audio.play();
    }
  };
  return (
    //   word infto and sound play icon div
    <div className="flex justify-between items-start w-full md:max-w-[737px]">
      <div className="flex flex-col gap-[7px] items-start md:gap-[5px]">
        <h1
          className={`text-[32px] leading-[41px] font-bold  md:text-[64px] md:leading-[82px]  ${
            check ? "text-[#2D2D2D]" : "text-white"
          }`}
        >
          {wordInfo?.word}
        </h1>
        <h4
          className={`text-[18px] leading-6 font-normal text-[#A445ED] md:text-[24px] md:leading-[29px]`}
        >
          {wordInfo?.phonetic}
        </h4>
      </div>
      <svg
        onClick={handleClick}
        className="w-12 h-12 self-center md:w-[75px] md:h-[75px] cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        width="75"
        height="75"
        viewBox="0 0 75 75"
      >
        <g fill="#A445ED" fillRule="evenodd" className="hover:fill-white">
          <circle
            cx="37.5"
            cy="37.5"
            r="37.5"
            opacity=".25"
            className="hover:opacity-100 hover:fill-[#A445ED]"
          />
          <path d="M29 27v21l21-10.5" />
        </g>
      </svg>
      <audio src={audioUrl} ref={audioRef}></audio>
    </div>
  );
};

export default ResultHeader;
