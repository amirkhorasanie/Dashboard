import { MdKeyboardCommandKey } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import { RiGeminiFill } from "react-icons/ri";

const SearchInput = () => {
  return (
    <div className="relative w-full max-w-md h-11.5 lg:h-13 rounded-full dark:text-neutral-400 text-neutral-700 dark:bg-neutral-900 border-2 border-neutral-300 dark:border-neutral-700 bg-neutral-200 flex items-center focus-within:ring-2 focus-within:ring-purple-500/20 focus-within:border-blue-500/50 transition">
      <LuSearch className="text-[25px] text-neutral-600 dark:text-neutral-300 mr-3"/>
      <input
        type="text"
        placeholder="جستجو کنید ..."
        className="w-full h-full px-1.5 text-[13px] placeholder-neutral-400 focus:outline-none"
      />

      <div className="absolute left-1.5 flex items-center gap-2 text-neutral-200 text-sm">
        <RiGeminiFill className="rounded-full p-1 w-8.5 text-neutral-300 dark:text-neutral-900 bg-gradient-to-l from-cyan-400 to-cyan-600 h-8.5" />
      </div>
    </div>
  );
};

export default SearchInput;
