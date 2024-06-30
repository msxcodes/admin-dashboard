import Navbar from "@/components/navbar/navbar";
import SideBar from "@/components/sidebar/sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="hidden md:block w-[250px] h-[100vh]">
          <SideBar />
        </div>
        <div className="p-4 w-full md:w-[1280px] ">{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
