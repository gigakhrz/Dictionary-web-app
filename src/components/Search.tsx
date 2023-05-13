import { useState } from "react";
import searchIcon from "../assets/icon-search.svg";

interface searchProps {
  check: boolean;
  setSearch(search: string): void;
}

const Search = ({ check, setSearch }: searchProps): JSX.Element => {
  const inputValue = (e: any) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    if (e.target.search.value === "") {
      setError(!error);
    } else {
      setError(false);
    }
  };

  const [error, setError] = useState<boolean>(false);

  return (
    <div
      className={`flex flex-col items-start gap-[8px] w-full md:max-w-[737px]`}
    >
      <form
        onSubmit={inputValue}
        className={`flex justify-center hover:border-[1px] hover:border-[#A445ED] cursor-pointer  gap-[20px] items-center rounded-[16px] w-full h-[48px] px-4 py-[14px] md:py-[22px] md:px-6 md:h-16  ${
          error ? "border-[1px] border-solid border-[#FF5252]" : ""
        } ${check ? "bg-[#F4F4F4]" : "bg-[#1F1F1F]  "}`}
      >
        <input
          autoComplete="off"
          type="search"
          id="search"
          placeholder="Search for any word…"
          className={`w-full  cursor-pointer outline-none border-none font-bold text-[16px] leading-[19.36px] bg-none appearance-none 
          placeholder:opacity-25 md:text-5 md:leading-[21px] bg-transparent ${
            check ? "bg-[#F4F4F4] " : "bg-[#1F1F1F]"
          } ${check ? "text-[#2D2D2D]" : "text-white"} `}
        />

        <button className="w-4 h-4 decoration-none" type="submit">
          {" "}
          <img src={searchIcon} alt="search icon" />
        </button>
      </form>
      <p
        className={`font-normal text-[16px] leading-[19.36px] text-[#FF5252] ${
          error ? "block" : "hidden"
        }`}
      >
        Whoops, can’t be empty…
      </p>
    </div>
  );
};

export default Search;
