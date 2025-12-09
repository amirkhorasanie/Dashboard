import SidebarHeader from "./components/SidebarHeader";
import Menus from "./components/Menus";
import menus from "../../data/menus";
import Profile from "../Topbar/components/Profile";
import { IoMdExit } from "react-icons/io";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 left-0 w-72 bg-white dark:bg-neutral-800 p-6 z-30 transform transition-transform duration-300 lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarHeader />
        <div className="mt-6 overflow-y-auto flex-1">
          <Menus menus={menus} setSidebarOpen={setSidebarOpen} />
        </div>
        <div className="dark:bg-white/10 p-2 mt-5 rounded-xl bg-black/10">
          <Profile/>
          <div className="text-sm mt-3 px-1.5 *:pb-1.5">
            <hr className="text-white/35 mb-2"></hr>
            <p>اینستاگرام : Amirkhorasanie</p>
            <p>تلفن : 09139637409</p>
          </div>
        </div>
        <div className="flex items-center pl-15 absolute bottom-5 gap-2 font-bold bg-red-200/55 px-3 rounded-2xl py-3 text-red-500 dark:text-red-400 dark:bg-white/15">
          <IoMdExit className="text-2xl"/>
          خروج از حساب کاربری
        </div>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden rounded-2xl lg:ml-5 lg:flex lg:flex-col lg:w-72 lg:h-fit lg:sticky lg:top-0 bg-neutral-50 dark:bg-neutral-800  backdrop-blur-2xl p-6">
        <SidebarHeader />
        <div className="mt-6 flex-1 overflow-y-auto">
          <Menus menus={menus} />
        </div>
        <div className="flex items-center gap-2 font-bold bg-red-200/55 px-3 rounded-2xl py-3 text-red-500 dark:text-red-400 dark:bg-white/15 mt-50">
          <IoMdExit className="text-2xl"/>
          خروج از حساب کاربری
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
