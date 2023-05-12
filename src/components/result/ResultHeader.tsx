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
    <div className="flex justify-between items-start w-full">
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
      <img
        className="w-12 h-12 self-center md:w-[75px] md:h-[75px]"
        src={playImg}
        alt="icon play"
        onClick={handleClick}
      />
      <audio src={audioUrl} ref={audioRef}></audio>
    </div>
  );
};

export default ResultHeader;
