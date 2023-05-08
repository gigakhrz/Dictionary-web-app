import { useState } from "react";
import Header from "./components/headet";

function App(): JSX.Element {
  const [check, setCheck] = useState<boolean>(true);
  return (
    <div
      className={`flex flex-col gap-6 w-full min-h-screen px-6 pt-6 pb-[63px] ${
        check ? "bg-white" : "bg-[#050505] "
      }`}
    >
      <Header check={check} setCheck={setCheck} />
    </div>
  );
}

export default App;
