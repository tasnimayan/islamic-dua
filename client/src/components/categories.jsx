'use client'


import { useEffect, useState} from 'react';
import { useSearchParams } from 'next/navigation';

import duaStore from './../store/duaStore';
import CategoryList from './categoryList';


const Categories = () => {
  const {categoryList, categoryListRequest, subCategoryListRequest, duaListRequest, showCategory, setShowCategory} = duaStore()

  const [categories, setCategories] = useState(null)
  const searchParams = useSearchParams()
  const categoryId = searchParams.get('cat')
 
  useEffect(() => {
    (async ()=>{
      await categoryListRequest()
      await subCategoryListRequest(categoryId)
      await duaListRequest(categoryId)
    })()
  }, []);
  
  
  // Function to handle categories search
  function handleFilter(searchQuery) {
    if(!searchQuery){
      return setCategories(categoryList)
    }
    // Convert the search query to lowercase
    const query = searchQuery.toLowerCase();
    
    // Filter categories
    const filteredCategories = categories.filter(category =>
        category.cat_name_en.toLowerCase().includes(query) ||
        category.cat_name_bn.includes(query)
    );

    setCategories(filteredCategories);
  }




  return (
    <div className={`${showCategory? '': 'hidden'} h-[85.5vh] z-[99] xs:w-full lg:w-[350px] overflow-hidden bg-white rounded-lg lg:block xs:h-screen sm:h-screen lg:h-[85vh]`}>
      <div className="fixed w-[350px] rounded-t-lg bg-primary justify-center items-center h-14 flex flex-row px-5">
        <p className="text-base text-white mx-auto">Categories</p>
        <button onClick={()=>{setShowCategory()}} className='lg:hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256">
            <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.33333,5.33333)"><path d="M24,4c-11.02793,0 -20,8.97207 -20,20c0,11.02793 8.97207,20 20,20c11.02793,0 20,-8.97207 20,-20c0,-11.02793 -8.97207,-20 -20,-20zM24,7c9.40662,0 17,7.59339 17,17c0,9.40661 -7.59338,17 -17,17c-9.40661,0 -17,-7.59339 -17,-17c0,-9.40661 7.59339,-17 17,-17zM30.48633,15.97852c-0.39614,0.00935 -0.77249,0.17506 -1.04687,0.46094l-5.43945,5.43945l-5.43945,-5.43945c-0.28248,-0.2909 -0.67069,-0.45506 -1.07617,-0.45508c-0.61065,0.00015 -1.16026,0.37042 -1.38978,0.93629c-0.22952,0.56587 -0.09314,1.21439 0.34486,1.63988l5.43945,5.43945l-5.43945,5.43945c-0.39185,0.37623 -0.54969,0.9349 -0.41265,1.46055c0.13704,0.52565 0.54754,0.93616 1.07319,1.07319c0.52565,0.13704 1.08432,-0.0208 1.46055,-0.41265l5.43945,-5.43945l5.43945,5.43945c0.37623,0.39185 0.9349,0.54969 1.46055,0.41265c0.52565,-0.13704 0.93616,-0.54754 1.07319,-1.07319c0.13704,-0.52565 -0.0208,-1.08432 -0.41265,-1.46055l-5.43945,-5.43945l5.43945,-5.43945c0.44646,-0.42851 0.58398,-1.08719 0.34628,-1.65854c-0.2377,-0.57135 -0.80184,-0.93811 -1.4205,-0.92349z"></path></g></g>
          </svg>
        </button>
      </div>

      <div className="bg-white fixed overflow-hidden w-[350px]  mt-14">
        {/* Fixed search bar */}
        <div className="mx-3 pt-4">
          <label className="relative block w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4">
              <svg className="stroke-mute-grey" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L15 15L21 21ZM17 10C17 10.9193 16.8189 11.8295 16.4672 12.6788C16.1154 13.5281 15.5998 14.2997 14.9497 14.9497C14.2997 15.5998 13.5281 16.1154 12.6788 16.4672C11.8295 16.8189 10.9193 17 10 17C9.08075 17 8.1705 16.8189 7.32122 16.4672C6.47194 16.1154 5.70026 15.5998 5.05025 14.9497C4.40024 14.2997 3.88463 13.5281 3.53284 12.6788C3.18106 11.8295 3 10.9193 3 10C3 8.14348 3.7375 6.36301 5.05025 5.05025C6.36301 3.7375 8.14348 3 10 3C11.8565 3 13.637 3.7375 14.9497 5.05025C16.2625 6.36301 17 8.14348 17 10Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </span>
            <input className="h-12 placeholder:text-mute-grey placeholder:text-sm border-[1px] block bg-white w-full rounded-md pl-12 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 sm:text-sm" placeholder="Search Categories" type="text" name="search" onChange={(e)=>handleFilter(e.target.value.trim() ?? null)}/>
          </label>
        </div>

        <CategoryList 
          categories = {categories}
          setCategories = {setCategories}
        />

      </div>
    </div>
  );
};

export default Categories;