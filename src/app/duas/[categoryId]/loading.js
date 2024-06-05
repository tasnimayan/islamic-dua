

const loading = () => {
  return (
    <div className="overflow-x-auto overflow-y-scroll">
      {
        [1,2,3,4].map(()=>(
          <div className="w-full h-auto bg-white rounded-lg mb-6">
            <div className="p-6 flex flex-col gap-12 animate-pulse duration-100">
              <div className="w-2/3 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100"></div>
                <div className="w-4/5 h-3 rounded-lg bg-gray-100"></div>
              </div>
    
              <div className='space-y-4 mt-2 ms-2'>
                <div className="w-full h-3 rounded-lg bg-gray-100"></div>
                <div className="w-full h-3 rounded-lg bg-gray-100"></div>
                <div className="w-4/5 h-3 rounded-lg bg-gray-100"></div>
              </div>
              
              <div className="w-1/5 h-3 rounded-lg bg-gray-100 ms-2"></div>
    
              <div className="w-full flex items-center justify-between">
                <div className="w-12 h-12 rounded-full bg-gray-100"></div>
                <div className="flex gap-6">
                  <div className="w-8 h-8 rounded-lg bg-gray-100"></div>
                  <div className="w-8 h-8 rounded-lg bg-gray-100"></div>
                  <div className="w-8 h-8 rounded-lg bg-gray-100"></div>
                  <div className="w-8 h-8 rounded-lg bg-gray-100"></div>
                  <div className="w-8 h-8 rounded-lg bg-gray-100"></div>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default loading;