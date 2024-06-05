// This component is shown on the smaller screen then xl
// Instead of the left side navigation, It shows minimal view of the nav on the bottom

const BottomNav = () => {
  const menu = ["alldua","memorize", "bookmark", "ruqyaH", "profile"]
  return (
    <div className="xl:hidden">
      <div className="fixed bottom-0 z-1 w-full bg-white pb-6 mt-6 rounded-t-[3rem] shadow-top hidden md:block lg:block xl:hidden">
        <div className="px-6 pt-6 flex justify-between">

          <a href="/">
            <div className="w-10 h-10 bg-lite-100 flex items-center justify-center rounded-full cursor-pointer">
              <img src="/assets/nav/home.svg" alt="/" />
            </div>
          </a>

          {
            menu.map((item) =>{
              return (
                <a href={`/${item}`}>
                  <div className="w-10 h-10 bg-lite-100 flex items-center justify-center rounded-full cursor-pointer">
                    <img src={`/assets/nav/${item}.svg`} alt="/" />
                  </div>
                </a>
              )
            })
          }

        </div>
      </div>
    </div>
  );
};

export default BottomNav;