import { useState } from "react";
import Header from "./components/headet";
import Search from "./components/Search";
import Result from "./components/Result";
import { types } from "./type";

function App(): JSX.Element {
  const [check, setCheck] = useState<boolean>(true);
  const [switchFont, setSwitchFont] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [wordInfo, setWordInfo] = useState<types | null>(null);

  return (
    <div
      className={`${
        switchFont === 1
          ? "font-inter"
          : switchFont === 2
          ? "font-lora"
          : "font-mono"
      } flex flex-col items-center  gap-6 w-full min-h-screen px-6 pt-6 pb-[63px] md:gap-[51px] md:px-10 md:pt-[58px] md:pb-[118px]  lg:px-0 lg:pt-64px ${
        check ? "bg-white" : "bg-[#050505] "
      }`}
    >
      <Header
        check={check}
        setCheck={setCheck}
        switchFont={switchFont}
        setSwitchFont={setSwitchFont}
      />
      <Search check={check} setSearch={setSearch} />
      <Result
        wordInfo={wordInfo}
        setWordInfo={setWordInfo}
        search={search}
        switchFont={switchFont}
        check={check}
      />
    </div>
  );
}

export default App;
