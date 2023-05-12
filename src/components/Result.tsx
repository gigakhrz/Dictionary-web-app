import ResultHeader from "./result/ResultHeader";
import NoResult from "./result/NoResult";
import { useEffect, useState } from "react";
import axios from "axios";
import { types } from "../type";
import Info from "./result/Info";
import Source from "./result/Source";

interface resultProps {
  wordInfo: types | null;
  setWordInfo(wordInfo: any): void;
  search: null | string;
  switchFont: number;
  check: boolean;
}

const Result = ({
  wordInfo,
  setWordInfo,
  search,
  switchFont,
  check,
}: resultProps): JSX.Element => {
  useEffect(() => {
    const getWord = async () => {
      try {
        const response = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
        );
        const data = response.data[0];
        setWordInfo(data);
        setShowResult(true);
      } catch (error) {
        setShowResult(false);
      }
    };
    if (search !== "") {
      getWord();
    }
  }, [search]);

  const [showResult, setShowResult] = useState<boolean | null>(null);

  return (
    <div className="w-full">
      {showResult === true ? (
        <div className="flex flex-col gap-[28px] items-start w-full">
          <ResultHeader wordInfo={wordInfo} check={check} />
          <Info wordInfo={wordInfo} check={check} switchFont={switchFont} />
          <Source check={check} wordInfo={wordInfo} />
        </div>
      ) : showResult === false ? (
        <NoResult />
      ) : null}
    </div>
  );
};

export default Result;
