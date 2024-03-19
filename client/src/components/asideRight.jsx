"use client"
import duaStore from "@/store/duaStore";

const asideRight = () => {
  const {language,setLanguage} = duaStore()

  return (
    <div className="hidden 2xl:block">
      <div className="overflow-hidden h-full w-full 2xl:w-[270px] 3xl:w-[300px]">
        
        <div className=" bg-white w-full h-[85.5vh]  rounded-3xl pb-16 xs:rounded-3xl xs:h-[72vh] xs:pb-2 sm:h-fit sm:rounded-3xl md:h-screen md:rounded-l-3xl md:rounded-r-none lg:h-screen lg:rounded-l-3xl lg:rounded-r-none xl:h-screen xl:rounded-3xl 2xl:w-full">
          
          <div className="pt-0 md:pt-9 md:pb-6 ">
            <p className="text-center text-xl xs:hidden md:block">Settings</p>
          </div>
          
          <div className="text-base xs:text-sm lg:text-sm xs:pb-4 sm:pb-4 w-full">
            
            <div className="mx-4 my-4">
              <div className="border border-t-0 rounded-lg">
                
                <div className="cursor-pointer">
                  <div className="bg-lite-100 transition duration-300 delay-[10ms] flex flex-row w-full rounded-lg">
                    <div className="bg-primary w-1 rounded-s-lg "></div>
                    <div className="p-2 flex flex-row items-center w-full ">
                      <div className="bg-lite-200 flex p-2 items-center rounded-full mr-5 justify-center">
                        <img src="/assets/sidebar/language.svg " alt="language" />
                      </div>
                      <p className="text-primary font-medium text-start text-base leading-5 xs:text-sm lg:text-sm style-Kalpurush ">Language Settings</p>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="py-6 rounded-b-lg">
                    <div className="flex flex-row gap-x-3 mx-4 justify-center">
                      <button className={`${language == 'en' ? 'bg-primary text-white' : 'text-black border border-solid border-[#cccdcf]'} cursor-pointer  rounded-md w-29 h-10 xs:w-full sm:w-full`} onClick={()=>setLanguage('en')}>English</button>

                      <button className={`${language == 'bn' ? 'bg-primary text-white' : 'text-black border border-solid border-[#cccdcf]'} cursor-pointer  rounded-md w-29 h-10 xs:w-full sm:w-full`} onClick={()=>setLanguage('bn')}>বাংলা</button>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            
            <div className="mx-4 my-4">
              <div className="cursor-pointer">
                <div className="bg-lite-100 flex flex-row w-full rounded-lg">
                  <div className=" w-1 rounded-s-lg"></div>
                  <div className="p-2 flex flex-row items-center w-full">
                    <div className="bg-lite-200 flex p-2 items-center rounded-full mr-5 justify-center">
                      <img src="/assets/sidebar/general.svg " alt="language logo" />
                    </div>
                    <p className="text-mute-gray-200 text-start leading-5 style-Kalpurush">General Settings</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-4 my-4">
              <div className="cursor-pointer">
                <div className="bg-lite-100 flex flex-row w-full rounded-lg">
                  <div className=" w-1 rounded-s-lg"></div>
                  <div className="p-2 flex flex-row items-center w-full">
                    <div className="bg-lite-200 flex p-2 items-center rounded-full mr-5 justify-center">
                      <img src="/assets/sidebar/font.svg " alt="font" />
                    </div>
                    <p className="text-mute-gray-200 text-start leading-5 style-Kalpurush">Font Settings</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-4 my-4">
              <div className="cursor-pointer">
                <div className="bg-lite-100 flex flex-row w-full rounded-lg">
                  <div className=" w-1 rounded-s-lg"></div>
                  <div className="p-2 flex flex-row items-center w-full">
                    <div className="bg-lite-200 flex p-2 items-center rounded-full mr-5 justify-center">
                      <img src="/assets/sidebar/font.svg " alt="font" />
                    </div>
                    <p className="text-mute-gray-200 text-start leading-5 style-Kalpurush">Appearance Settings</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default asideRight;