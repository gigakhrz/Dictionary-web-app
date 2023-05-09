import Succes from "./result/Succes";
import NoResult from "./result/NoResult";
import { useEffect } from "react";
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
      const response = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/keyboard"
      );
      const data = response.data;
      setWordInfo(data);
      console.log("wordInfo:", wordInfo);
    };
    if (search !== "") {
      getWord();
    }
  }, [search]);

  return (
    <div>
      <Succes />
      <NoResult />
    </div>
  );
};

export default Result;
