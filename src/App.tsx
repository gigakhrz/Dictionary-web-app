import { useState } from "react";
import Header from "./components/headet";
import Search from "./components/Search";
import Result from "./components/Result";

function App(): JSX.Element {
  const [check, setCheck] = useState<boolean>(true);
  const [switchFont, setSwitchFont] = useState<number>(1);
  const [search, setSearch] = useState<string | null>("");
  const [wordInfo, setWordInfo] = useState<any>([]);

  return (
    <div
      className={`${
        switchFont === 1
          ? "font-inter"
          : switchFont === 2
          ? "font-lora"
          : "font-mono"
      } flex flex-col gap-6 w-full min-h-screen px-6 pt-6 pb-[63px] ${
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
      <Result wordInfo={wordInfo} setWordInfo={setWordInfo} search={search} />
    </div>
  );
}

export default App;
