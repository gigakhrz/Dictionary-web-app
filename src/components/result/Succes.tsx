import { types } from "../../type";
import playImg from "../../assets/icon-play.svg";
import { useRef } from "react";
interface succesProps {
  wordInfo: types | null;
  switchFont: number;
  check: boolean;
}

const Succes = ({ wordInfo, switchFont, check }: succesProps): JSX.Element => {
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
    <div className="flex flex-col gap-[31px] items-center">
      {/* word infto and sound play icon div */}
      <div className="flex justify-between items-start w-full">
        <div className="flex flex-col gap-[7px] items-start">
          <h1
            className={`text-[32px] leading-[41px] font-bold  ${
              check ? "text-[#2D2D2D]" : "text-white"
            }`}
          >
            {wordInfo?.word}
          </h1>
          <h4 className={`text-[18px] leading-6 font-normal text-[#A445ED]`}>
            {wordInfo?.phonetic}
          </h4>
        </div>
        <img
          className="w-12 h-12 self-center"
          src={playImg}
          alt="icon play"
          onClick={handleClick}
        />
        <audio src={audioUrl} ref={audioRef}></audio>
      </div>
    </div>
  );
};

export default Succes;
