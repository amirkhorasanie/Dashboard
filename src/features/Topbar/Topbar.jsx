import SearchInput from "./components/SearchInput";
import Notifications from "./components/Notifications";
import Divider from "./components/Divider";
import Profile from "./components/Profile";
import { HiOutlineMenu } from "react-icons/hi";
import ThemeButton from "../../components/ThemeButton";

const Topbar = ({ setSidebarOpen }) => {
  return (
    <div
      className="
        fixed top-0 lg:rounded-2xl left-0 right-0 w-full
        lg:static
        flex z-50 items-center justify-between
        h-20 lg:h-22 px-4 sm:px-6 lg:px-8
        dark:bg-neutral-800
        backdrop-blur-2xl
        bg-white
      "
    >
      {/* Mobile menu button */}
      <div className="flex items-center lg:hidden">
        <button
          onClick={() => setSidebarOpen(true)}
          className="inline-flex p-2
          rounded-full dark:text-cyan-400 text-cyan-700 dark:bg-cyan-900 border-2 border-cyan-200 dark:border-cyan-900 bg-cyan-200
            items-center justify-center cursor-pointer hover:text-white transition"
        >
          <HiOutlineMenu className="h-6.5 w-6.5"/>
        </button>
      </div>

      {/* Search - hidden on mobile */}
      <div className="flex-1 justify-center mx-2 lg:justify-start">
        <SearchInput />
      </div>

      {/* Right section */}
      <div className="flex items-center gap-2">
        <div className="hidden lg:flex"><Profile/></div>
        <Divider />
        <Notifications />
        <ThemeButton />
      </div>
    </div>
  );
};

export default Topbar;

