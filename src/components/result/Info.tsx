import { types } from "../../type";

interface InfoProps {
  wordInfo: types | null;
  check: boolean;
  switchFont: number;
}

const Info = ({ wordInfo, check, switchFont }: InfoProps): JSX.Element => {
  console.log(wordInfo);
  return (
    <>
      {wordInfo?.meanings.map((meaning, index) => {
        return (
          <div
            key={index}
            className="flex flex-col gap-[31px] items-start w-full md:gap-10 md:max-w-[737px]"
          >
            <div className="flex gap-[25px]  w-full items-center">
              <h3
                className={`text-[18px] leading-[23px] md:text-[24px] md:leading-[29px] ${
                  check ? "text-[#2D2D2D]" : "text-white"
                } text-[18px] leading-[23px] ${
                  switchFont === 1 ? "italic" : switchFont === 2 ? "italic" : ""
                }`}
              >
                {meaning.partOfSpeech}
              </h3>
              <hr
                className={`border-none h-[1px] w-full ${
                  check ? "bg-[#E9E9E9]" : "bg-[#3A3A3A]"
                }`}
              />
            </div>

            <div className="flex flex-col gap-[13px] w-full">
              <h4
                className={`text-[#757575] text-[16px] leading-[19.3px] mb-1 md:-[11px] md:text-[20px] md:leading-[25.5px]`}
              >
                Meaning
              </h4>

              {meaning.definitions.map((definiton, index) => {
                return (
                  <div key={index} className="flex flex-col gap-6 w-full">
                    <div className="flex gap-5 items-start">
                      {/* for dot and definition*/}
                      <div className="min-w-[5px] min-h-[5px] rounded-full mt-[8px] bg-[#8F19E8]"></div>
                      <div className="w-full flex flex-col items-start gap-[13px]">
                        <p
                          className={`  ${
                            check ? "text-[#2D2D2D]" : "text-white"
                          } text-[15px] leading-6 font-normal md:text-[18px]`}
                        >
                          {definiton?.definition}
                        </p>

                        <h4
                          className={`text-[#757575] text-[15px] leading-6] `}
                        >
                          {definiton?.example && `"${definiton?.example}"`}
                        </h4>
                      </div>
                    </div>
                  </div>
                );
              })}
              {meaning.synonyms && meaning.synonyms.length > 0 && (
                <div
                  className={` ${
                    meaning?.synonyms
                      ? " flex gap-6 items-center w-full flex-wrap flex-row"
                      : "hidden"
                  }`}
                >
                  <h4
                    className={` text-[#757575] font-normal text-[16px] leading-[19.3px] mb-1 md:text-[20px] md:leading-[25.5px]`}
                  >
                    Synonyms
                  </h4>

                  {meaning?.synonyms?.map((synonym, index) => {
                    return (
                      <div key={index} className="flex  gap-[10px] ">
                        <h4
                          className={`text-[#A445ED] font-bold text-[16px] leading-[19.3px] md:text-[20px] md:leading-[25.5px] self-center`}
                        >
                          {synonym}
                        </h4>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Info;
