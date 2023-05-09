import Succes from "./result/Succes";
import NoResult from "./result/NoResult";
import { useEffect, useState } from "react";
import axios from "axios";

interface resultProps {
  wordInfo: any;
  setWordInfo(wordInfo: any): void;
  search: null | string;
}

const Result = ({
  wordInfo,
  setWordInfo,
  search,
}: resultProps): JSX.Element => {
  useEffect(() => {
    const getWord = async () => {
      try {
        const response = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
        );
        const data = response.data;
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
  console.log(wordInfo);
  const [showResult, setShowResult] = useState<boolean | null>(null);

  return (
    <div>
      {" "}
      {showResult === true ? (
        <Succes />
      ) : showResult === false ? (
        <NoResult />
      ) : null}
    </div>
  );
};

export default Result;
