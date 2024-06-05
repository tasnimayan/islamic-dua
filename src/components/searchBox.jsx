
"use client"
const SearchBox = () => {
  let handleSearch = (e) => {
    e.preventDefault()
    console.log(e.target.search_box.value)
  }
  return (
    <div className="flex flex-row items-center relative">
      <form className="sm:w-full" action="" onSubmit={e => handleSearch(e)}>
        <div className="w-82 sm:w-full relative md:mr-6 md:w-72 lg:mr-6">
          <div className="flex justify-between sm:flex-col sm:gap-4">
            
            <input id="search_box" className=" placeholder:text-gray-400 bg-white sm:bg-gray-200 md:bg-gray-100 lg:bg-gray-100 xl:bg-white w-full rounded-md py-3 px-4 shadow-sm focus:outline-none focus:border-primary sm:text-sm" placeholder="Search by Dua Name" type="text" name="search" />

            <button type="submit" className="flex items-center justify-center bg-gray-100  cursor-pointer md:hover:bg-gray-200 hover:text-gray-500 text-gray-400 px-4 py-[7px] rounded-md md:absolute right-1 top-1 sm:bg-primary md:bg-white lg:bg-white xl:bg-gray-100 sm:focus:bg-green-700">
              <svg className="stroke-gray-400" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L15 15L21 21ZM17 10C17 10.9193 16.8189 11.8295 16.4672 12.6788C16.1154 13.5281 15.5998 14.2997 14.9497 14.9497C14.2997 15.5998 13.5281 16.1154 12.6788 16.4672C11.8295 16.8189 10.9193 17 10 17C9.08075 17 8.1705 16.8189 7.32122 16.4672C6.47194 16.1154 5.70026 15.5998 5.05025 14.9497C4.40024 14.2997 3.88463 13.5281 3.53284 12.6788C3.18106 11.8295 3 10.9193 3 10C3 8.14348 3.7375 6.36301 5.05025 5.05025C6.36301 3.7375 8.14348 3 10 3C11.8565 3 13.637 3.7375 14.9497 5.05025C16.2625 6.36301 17 8.14348 17 10Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;