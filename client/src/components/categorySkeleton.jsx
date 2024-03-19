
const CategorySkeleton = () => {
  return (
    <div className="animate-pulse-fast">
      {
        [1,2,3,4,5].map(item => (
          <div className='h-20 bg-gray-50 mx-3 my-2 rounded-xl' key={item}>
            <div className="flex gap-4 p-4">
              <div className="w-12 h-12 rounded-lg bg-gray-100"></div>
              <div className='w-2/3 flex flex-col gap-4'>
                <div className='w-full h-3 rounded-lg bg-gray-200'></div>
                <div className='w-1/2 h-2 rounded-lg bg-gray-200'></div>
              </div>
            </div>
          </div>
        ))
      }
      
    </div>
  );
};

export default CategorySkeleton;