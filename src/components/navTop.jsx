import SearchBox from "./searchBox";

const NavTop = () => {
  return (
    <>
    {/* General Top Bar */}
      <div className="right-10 xl:left-1 hidden xl:relative mb-20 lg: xl:block 2xl:block 3xl:block">
        <div className="grid grid-cols-[82.2%,1fr] xl:w-[99%] 2xl:grid-cols-[82.2%,1fr] 3xl:grid-cols-[81%,1fr]">
          <div className="flex flex-row justify-between">
            <div className="text-left flex items-center">
              <div>
                <h1 className="text-2xl">Duas Page</h1>
                <p className="text-sm text-mute-grey-200 dark:text-dark-text"></p>
              </div>
            </div>
            
            <SearchBox />
          </div>

          <div className="flex flex-row items-center justify-end">
            <div className="md:-z-[1] lg:-z-[1]">
              <div className="relative" data-nohead-state="">
                <button className="
                  text-opacity-90
                  group inline-flex items-center rounded-md px-3 text-base font-medium  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-body-bg focus-visible:ring-opacity-75 
                  sm:px-0
                  " id="nohead-popover-button-:r0:" type="button" aria-expanded="false" data-nohead-state="">
                  <img src="/assets/settings/profile.svg" alt="profile" />
                  <svg className="ml-2 mr-2" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.79241 5.97063C5.3921 6.49064 4.6079 6.49064 4.20759 5.97063L1.04322 1.85999C0.537025 1.20243 1.00579 0.25 1.83563 0.25L8.16437 0.250001C8.99421 0.250001 9.46298 1.20243 8.95678 1.86L5.79241 5.97063Z" fill="#868686"></path>
                  </svg>
                </button>
              </div>
            </div>
            
            
            <div>
              <img src="/assets/settings/settings.svg" className="2xl:hidden 3xl:hidden" alt="settings" />
              <main className="2xl:hidden 3xl:block fixed overflow-hidden bg-gray-900 bg-opacity-50 inset-0 transform ease-in-out z-20 translate-x-full transition-all delay-200 opacity-0">
              </main>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="bg-[#ebeef2] w-full xs:flex md:hidden p-5">
        <div className="flex items-center justify-between">
          <img src="/assets/icon/back.svg" className="h-4 cursor-pointer" alt="back icon" />
          <p className=" text-title text-lg ml-4 text-center">Duas Page</p>
          <button className="">
            <img src="/assets/settings/settings.svg" className="w-6 h-6 cursor-pointer " alt="" />
          </button>
        </div>
      </div>

      {/* Tab only Top Bar */}

      <div className="fixed top-0 md:z-[1] w-full md:flex flex-row p-4 items-center justify-between bg-white shadow cursor-pointer xl:hidden hidden">
        <a href="/">
          <div className="flex items-center">
            <img src="/assets/dua-logo.svg" alt="dua-logo" />
            <p className="text-title font-medium text-xl ml-3">Dua &amp; Ruqyah</p>
          </div>
        </a>

        <div className="flex items-center justify-between z-1">
          <SearchBox />

          {/* Settings Icons */}
          <div>
            <div className="mr-4">
              <img src="/assets/settings/settings.svg " alt="settings" />
            </div>
          </div>

          {/* Profile Avatar with Menu */}
          <div className="md:-z-[1] lg:-z-[1]">
            <div className="relative" data-headlessui-state="">
              <button className="text-opacity-90 group inline-flex items-center rounded-md px-3 text-base font-medium  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-body-bg focus-visible:ring-opacity-75 
                  sm:px-0
                  " id="headlessui-popover-button-:r3:" type="button" aria-expanded="false" data-headlessui-state="">
                <img src="/assets/settings/profile.svg" alt="profile" />
                <svg className="ml-2 mr-2" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.79241 5.97063C5.3921 6.49064 4.6079 6.49064 4.20759 5.97063L1.04322 1.85999C0.537025 1.20243 1.00579 0.25 1.83563 0.25L8.16437 0.250001C8.99421 0.250001 9.46298 1.20243 8.95678 1.86L5.79241 5.97063Z" fill="#868686"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      

    </>
  );
};

export default NavTop;