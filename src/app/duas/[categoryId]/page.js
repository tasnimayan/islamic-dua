'use client'
import DuaCard from '@/components/duaCard';
import duaStore from '@/store/duaStore';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const DuaList = () => {

  const {duaList, duaListRequest, setShowCategory} = duaStore()

  const searchParams = useSearchParams()
  const categoryId = searchParams.get('cat')

  useEffect(() => {
    (async ()=>{
      await duaListRequest(categoryId)
    })()
  }, []);


  return (
    <div className="w-full sm:overflow-y-auto sm:pb-20 md:h-[calc(100vh-100px)] md:pb-48 md:w-[98%] md:mx-auto lg:pb-6 md:pt-24 lg:pt-0 lg:col-start-2 xl:pb-8 sm-max:px-2 delay-1000 transition duration-1000 ease-linear overflow-y-auto h-[calc(100vh_-_100px)] pr-1">
      {/* Show on mobile view */}
      <div>
        <div className="flex flex-row justify-between mb-5 px-5 py-4 bg-white items-center cursor-pointer lg:hidden">
          <p className="flex gap-x-2 style-Kalpurush text-title font-medium leading-[25px] text-mss" onClick={() => {setShowCategory()}}>
            <span className='hover:scale-110 transition-transform duration-300'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
              </svg>
            </span>
            Dua's importance
          </p>
        </div>
      </div>

      {
        duaList?.map(item => {
          return (
            <>
              <div id={`subcat_${item.subcat_id}`} className="flex undefined mb-5 flex-row bg-white rounded-lg px-5 py-4 justify-start items-center">
                <p className="leading-[25px] text-[15px] style-Kalpurush ">
                  <span className="text-primary  leading-[25px] text-mss style-Kalpurush">Section: </span>{item.subcat_name_en}
                </p>
              </div>
              {
                item.duas?.map( (dua) => (
                  <DuaCard dua = {dua} key={dua.id}/>
                ))
              }
            </>
          )          
        })
      }

      
    </div>
  );
};

export default DuaList;