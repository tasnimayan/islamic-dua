import duaStore from "@/store/duaStore";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const SubCategories = ({item, linkPath, isActive}) => {

  const {subCategoryListRequest} = duaStore()
  const searchParams = useSearchParams()
  const categoryId = searchParams.get('cat')

  useEffect(() => {
    (async ()=>{
      await subCategoryListRequest(categoryId)
    })()
  }, []);

  return (
    <div className="flex flex-row my-2" key={item.subcat_id}>
      <div className="w-1.5 h-1.5 rounded-full bg-primary -translate-x-4 mt-1.5 "></div>
      <div className="flex flex-col justify-start items-start">
        <Link href={`${linkPath}&subcat=${item.subcat_id}`}>
        {/* <Link href={`#subcat_${item.subcat_id}`}> */}
          <p className="cursor-pointer font-semibold text-left text-sm xs:text-xs hover:text-primary  style-Kalpurush">{item.subcat_name_en}</p>
        </Link>
        <div class="mt-2 cursor-pointer">
          {isActive? (
            item.duas.map((dua => (
              <a href={`${linkPath}&subcat=${item.subcat_id}&dua=${dua.dua_id}`}>
                <div class="flex flex-row hover:text-primary">
                  <img src="/assets/duaarrow.svg" class="-translate-y-1 mr-2" alt="dua" />
                  <p class=" text-xs my-3 text-left w-[95%] dark:text-gray-300 style-Kalpurush">{dua.dua_name_en}</p>
                </div>
              </a>
            )))
          ) : null
          } 
        </div>

      </div>
    </div>
  );
};

export default SubCategories;