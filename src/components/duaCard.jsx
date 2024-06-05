
const DuaCard = ({dua}) => {
  return (
    <div id={`dua_${dua.dua_id}`} className=" bg-white rounded-lg mb-5 dark:bg-dark-bg">
      <div className="p-6">
        <div>
          <div className="flex flex-row  justify-start items-center ">
            <img src="/assets/icon/duacard.svg" alt="duacard" className="mr-3" />
            <p className="text-primary font-medium style-Kalpurush-dua-title">{dua.dua_id + ". " + dua.dua_name_en}</p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start">
          <div className="w-full">
            <p className="style-Kalpurush style-inter dark:text-[#e4e4e4] mt-5 text-justify leading-8 font-normal text-lg">
              <span> {dua.top_en}</span>
            </p>

            {
              dua.dua_arabic ? (
                <p dir="rtl" class="my-8 text-right leading-loose text-3xl">{dua.dua_arabic}</p>
                ) : null
            }

            {
              dua.transliteration_en ? (
                <p class="style-Kalpurush style-inter dark:text-[#e4e4e4] my-5 text-justify leading-8 italic text-lg">
                  <span id="transliteration" class="style-Kalpurush style-Kalpurush-dua-title style-inter-dua-title text-lg">Transliteration:</span>
                  <span>{dua.transliteration_en}</span>
                </p>) : null
            }
            {
              dua.translation_en ? (
                <p id="translation" class="style-Kalpurush style-inter  my-5 text-title text-justify text-lg"><span class="style-Kalpurush style-Kalpurush-dua-title style-inter-dua-title text-lg">Translation:</span> <span> {dua.translation_en} </span></p>) : null
            }
          </div>
          <div>
            <p className="mt-5 style-Kalpurush style-inter font-normal text-primary text-lg">Reference:</p>
            <div className="mt-1 style-Kalpurush style-inter font-normal dark:text-dark-text text-lg">
              <span> {dua.refference_en}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <div className="flex flex-row items-center justify-between px-6">
          {
            dua.audio ? (
              <div className="py-4 flex flex-row items-center xs:w-full xs:gap-x-4">
                <audio src={dua.audio} id={"audio" + dua.id}></audio>
                <div class="flex flex-row items-center gap-x-3 xs:w-full">
                  <img class="cursor-pointer xs:w-8" src="/assets/icon/audiobtn.svg" alt="" />
                  <input class="hidden" type="range" min="0" max="2429" value="169.583" style={{backgroundSize: `6.9816% 100%`}}/>
                  </div>
                <div className="hidden">
                  <p className="ml-2 text-mute-grey-200 text-sm dark:text-dark-text">00:00</p>
                </div>
                <div className="hidden">
                  <img className="cursor-pointer w-8  opacity-60" alt="suffle" src="/assets/others/suffle.svg" />
                </div>
              </div>
            ) : (<div></div>)
          }

          <div className="flex items-center flex-row justify-between py-6 gap-x-8 xs:gap-x-6">
            <div id="copy" className="relative w-6">
              <img className="cursor-pointer" src="/assets/others/copy.svg" alt="copy" />
            </div>
            <div id="bookmark" className="relative w-6">
              <img className="cursor-pointer" src="/assets/others/bookmark.svg" alt="bookmark" />
            </div>
            <div id="plan" className="relative w-6">
              <img className="cursor-pointer" src="/assets/others/plan.svg" alt="plan" />
            </div>
            <div id="share" className="relative w-6">
              <img className="cursor-pointer" src="/assets/others/share.svg" alt="share" />
            </div>
            <div id="report" className="relative w-6">
              <img className="cursor-pointer" src="/assets/others/report.svg" alt="report" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuaCard;