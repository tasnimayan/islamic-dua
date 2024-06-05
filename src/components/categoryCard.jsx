
import Link from "next/link";

const CategoryCard = ({linkPath, category, isActive}) => {

  return (
    <Link href={ linkPath} key={category.cat_id}>
      <div className="cursor-pointer bg-white flex justify-between items-center mx-3 my-2">
        <div className={`${isActive?'bg-lite-200' : ''} hover:bg-lite-200 flex flex-row gap-x-4 items-center w-full h-18 p-3 rounded-xl`}>
          <div className="flex flex-row w-70 items-center xs:w-full sm:w-full md:w-full">
            <div className="bg-lite-100 flex rounded-lg items-center h-14 w-14 xs:w-12 xs:h-12">
              <img src={`/assets/icon/${category.cat_icon}.svg`} alt={category.cat_name_en} className="p-3" />
            </div>
            <div className="w-40 text-left ml-2 ">
              <p className="text-base  style-kalpurush text-black style-inter-cat sm:text-mss">{category.cat_name_en}</p>
              <p className="text-mute-grey text-xs mt-1 xs:text-[11px] ">Subcategory: {category.no_of_subcat}</p>
            </div>
          </div>
          <div className="flex flex-row w-12 items-center xl:hidden 2xl:flex ">
            <div className="w-[2px] mr-3 h-12 bg-gray-100"></div>
            <div className="flex flex-col gap-y-1 justify-center items-center">
              <p className="text-base dark:text-dark-text xs:text-sm sm:text-mss">{category.no_of_dua}</p>
              <p className="text-gray-400 text-sm xs:text-[11px]">Duas</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;