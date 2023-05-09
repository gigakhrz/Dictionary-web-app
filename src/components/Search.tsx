import searchIcon from "../assets/icon-search.svg";

interface searchProps {
  check: boolean;
  setSearch(search: string): void;
}

const Search = ({ check, setSearch }: searchProps): JSX.Element => {
  const inputValue = (e: any) => {
    e.preventDefault();
    setSearch(e.target.search.value);
  };

  return (
    <form
      onSubmit={inputValue}
      className={`flex justify-center gap-[20px] items-center rounded-[16px] w-full h-[48px] px-4 py-[14px] ${
        check ? "bg-[#F4F4F4]" : "bg-[#1F1F1F]  "
      }`}
    >
      <input
        type="search"
        id="search"
        placeholder="Search for any word…"
        className={`w-full outline-none border-none font-bold text-[16px] leading-[19.36px] bg-none appearance-none placeholder:opacity-25 ${
          check ? "bg-[#F4F4F4] " : "bg-[#1F1F1F]"
        } ${check ? "text-[#2D2D2D]" : "text-white"} `}
      />

      <img src={searchIcon} alt="search icon" />
    </form>
  );
};

export default Search;
