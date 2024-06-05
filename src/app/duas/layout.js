import NavTop from "@/components/navTop";
import AsideLeft from "@/components/asideLeft";
import AsideRight from "@/components/asideRight";
import BottomNav from "@/components/bottomNav";
import Categories from "@/components/categories";


const Layout = ({children}) => {
  return (
  <div className="lg:fixed lg:inset-x-0 xl:p-6 xl:pb-0 2xl:px-10 2xl:pt-6 3xl:p-10 3xl:pb-0">
    
    <div className="relative lg:grid gap-0 lg:gap-2 xl:gap-6 xs:flex xs:flex-col lg:grid-rows-[105px,1fr] xl:grid-rows-[46px,1fr] lg:grid-cols-[370px,1fr] xl:grid-cols-[105px,350px,1fr] 2xl:grid-cols-[105px,350px,1fr,270px] z-0">
      
      <AsideLeft />
      
      <div className="xl:col-start-2 lg:col-span-full 2xl:col-start-2 2xl:col-span-full 3xl:col-start-2 3xl:col-span-full">
        <NavTop />
      </div>
      
      <div className="">
        <Categories />
      </div>
      
      <div className="overflow-hidden">
        {children}
      </div>

      <AsideRight />
    </div>

    <BottomNav />
  </div>
  );
};

export default Layout;