import SidebarHeader from "./components/SidebarHeader";
import Menus from "./components/Menus";
import menus from "../../data/menus";
import Profile from "../Topbar/components/Profile";
import { IoMdExit } from "react-icons/io";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      {/* Mobile Drawer (Right side) */}
      <div
        className={`fixed inset-y-0 right-0 w-72 bg-white dark:bg-neutral-800 p-6 z-30 transform transition-transform duration-700 lg:hidden ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <SidebarHeader />
        <div className="mt-6 overflow-y-auto flex-1">
          <Menus menus={menus} setSidebarOpen={setSidebarOpen} />
        </div>
        <div className="dark:bg-cyan-950/40 p-2 mt-5 rounded-xl bg-cyan-200">
          <Profile />
          <div className="text-sm mt-3 px-1.5 *:pb-1.5">
            <hr className="text-white/35 mb-2"></hr>
            <p>اینستاگرام : Amirkhorasanie</p>
            <p>تلفن : 09139637409</p>
          </div>
        </div>
        <div className="mt-5 flex items-center gap-2 font-bold bg-cyan-200 px-3 rounded-2xl py-3 text-cyan-600 dark:text-cyan-300 dark:bg-cyan-900">
          <IoMdExit className="text-2xl" />
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

      {/* Desktop Sidebar (Always fixed, right side) */}
      <aside className="hidden ml-5 lg:flex lg:flex-col lg:w-72 lg:h-screen lg:sticky lg:top-0 lg:right-0 bg-neutral-50 dark:bg-neutral-800 rounded-2xl backdrop-blur-2xl p-6">
        <SidebarHeader />
        <div className="mt-6 flex-1 overflow-y-auto">
          <Menus menus={menus} />
        </div>
        {/* Fixed exit button at the bottom */}
        <div className="mt-auto flex items-center gap-2 font-bold bg-cyan-300 px-3 rounded-2xl py-3 text-cyan-800 dark:text-cyan-300 dark:bg-cyan-900 hover:bg-cyan-400 dark:hover:bg-cyan-800 transition-colors duration-300">
          <IoMdExit className="text-2xl" />
          خروج از حساب کاربری
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
