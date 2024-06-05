

const AsideLeft = () => {
  const menuList = ['home', 'alldua', 'memorize', 'bookmark', 'ruqyah', 'dua-info', 'books'] 
  return (
    <>
      <div className="hidden xl:block row-span-full w-[100px]">
        <div className="flex flex-col gap-y-5 fixed overflow-hidden">
          <div className="rounded-3xl px-4 overflow-y-auto lg:h-[calc(93vh)] xl:h-[94vh] 2xl:h-[93vh] 3xl:h-[93vh] pb-16 bg-white">
        
            {/* Logo section */}
            <div className="pt-7 mb-10 xl:mb-16 2xl:mb-16 3xl:mb-24 container">
              <a href="/">
                <img src="/assets/dua-logo.svg" alt="dua-logo" className="h-14 w-14 mx-auto xl:mb-0 cursor-pointer" />
              </a>
            </div>

            {
              menuList.map((item, idx) => {
                return (
                  <a href="/" key={idx}>
                    <div className="justify-center items-center cursor-pointer my-2 flex flex-row w-full rounded-lg group hover:scale-105 transition-transform ease-in duration-200">
                      <div className=" w-1 rounded-tl-lg rounded-bl-lg "></div>
                      <div className="p-2 flex flex-row justify-center items-center">
                        <div className=" bg-lite-200 flex p-2 rounded-full items-center h-10 w-10 justify-center">
                          <img src={`/assets/nav/${item}.svg`} alt="/" />
                        </div>
                        <h2 className="text-mute-grey-200 style-Kalpurush text-sm text-start group-hover:text-primary font-medium "></h2>
                      </div>
                    </div>
                  </a>
                )
              })
            }

            <div>
              <div class="pt-6 xl:pt-16 2xl:pt-16 3xl:pt-24 pb-2 text-center">
                <a href="/support">
                  <div class="w-14 h-14 bg-primary rounded-lg text-white text-sm flex justify-center items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.2577 7.39C19.7087 6.925 19.9877 6.282 19.9877 5.572C19.9877 4.862 19.7087 4.219 19.2577 3.754C19.0296 3.51598 18.7558 3.3265 18.4527 3.19693C18.1496 3.06736 17.8234 3.00038 17.4937 3C17.4937 3 16.2497 2.997 14.9997 4.286C13.7497 2.997 12.5057 3 12.5057 3C12.1762 3.00042 11.8501 3.06732 11.547 3.19671C11.2439 3.32609 10.97 3.5153 10.7417 3.753C10.2907 4.219 10.0117 4.861 10.0117 5.571C10.0117 6.281 10.2907 6.925 10.7417 7.389L13.5305 10.409C14.3224 11.2665 15.6772 11.2666 16.4691 10.4092L19.2577 7.39Z" fill="white">
                      </path>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M19.226 13.02L16.0478 15.5619C15.6932 15.8455 15.2526 16 14.7986 16H11C10.7239 16 10.5 15.7761 10.5 15.5C10.5 15.2239 10.7239 15 11 15H14.565C14.6554 15 14.7442 14.9754 14.8218 14.9289C14.8993 14.8824 14.9629 14.8157 15.0055 14.736C15.0482 14.6563 15.0685 14.5664 15.0642 14.4761C15.0598 14.3858 15.0311 14.2983 14.981 14.223L14.093 12.891C13.9108 12.6168 13.6636 12.392 13.3735 12.2365C13.0833 12.081 12.7592 11.9998 12.43 12H7C6.73478 12 6.48043 12.1054 6.29289 12.2929C6.26671 12.3191 6.22752 12.3615 6.17673 12.4164C5.86372 12.755 5.1104 13.5698 4.25 14L1.5 14V19H3.75C5 19 6.12493 19.1249 6.5 19.5C6.87507 19.8751 7.46957 20 8 20H15.139C15.5666 20.0001 15.9893 19.9088 16.3787 19.7322C16.7682 19.5556 17.1153 19.2977 17.397 18.976L22.4064 14.0708C22.906 13.5816 22.7114 12.7371 22.048 12.516C21.573 12.3577 21.0658 12.3208 20.5729 12.4089C20.0799 12.4969 19.6169 12.707 19.226 13.02Z" fill="white">
                      </path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
};

export default AsideLeft;