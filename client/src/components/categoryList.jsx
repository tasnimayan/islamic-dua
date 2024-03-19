
import CategoryCard from './categoryCard';
import SubCategories from './subCategories';
import CategorySkeleton from './categorySkeleton';
import { useEffect } from 'react';
import duaStore from '@/store/duaStore';
import { useSearchParams } from 'next/navigation';

const CategoryList = ({categories,setCategories}) => {

  const {categoryList, subCategoryList} = duaStore()

  const searchParams = useSearchParams()
  const categoryId = searchParams.get('cat')
  const subCat = searchParams.get('subcat')

  useEffect(() => {
    setCategories(categoryList)
    console.log('1')
  }, [categoryList]);
  

  return (
    <div className="h-[calc(100vh-32vh)] lg:h-[calc(100vh_-_34.5vh)] pb-8 mb-4 overflow-y-auto">
      <div className="mt-4">
        
        <div className="group scroll-mt-4 style-Kalpurush" id="cat_1">
          { 
            !categoryList? <CategorySkeleton/> : categories?.map((category) =>{
              let linkPath = `/duas/${category.cat_name_en.split(' ').join('-').toLowerCase()}?cat=${category.cat_id}`
              // let linkPath = `/duas/${category.cat_name_en}?cat=${category.cat_id}`
              const isActive = category.cat_id == categoryId
              return (
                <>
                  <CategoryCard
                    linkPath={linkPath}
                    category={category}
                    isActive={isActive}
                  />

                  {/* Sub Categories Rendering */}
                  {
                    isActive ? (
                      <div className=" ml-12 border-l-2 border-dotted my-2 border-primary">
                        <div className="flex flex-col justify-start items-start gap-y-2 ml-3 ">
                          {
                            subCategoryList?.map((item)=>{
                              let isSubActive = item.subcat_id == subCat
                              return (
                                // Sub Category Text with respective dua name
                                <SubCategories 
                                  linkPath={linkPath}
                                  item = {item}
                                  isActive = {isSubActive}
                                />
                              )
                            })
                          }  
                        </div>
                      </div>
                    ): null
                  }

                </>
              )
          })}
        </div>


      </div>
    </div>
  );
};

export default CategoryList;