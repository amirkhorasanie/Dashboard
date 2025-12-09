import { MdKeyboardCommandKey } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import { RiGeminiFill } from "react-icons/ri";

const SearchInput = () => {
  return (
    <div className="relative w-full max-w-md h-11.5 lg:h-13 rounded-full dark:text-neutral-400 text-neutral-700 dark:bg-neutral-900 border-2 border-neutral-300 dark:border-neutral-600 bg-neutral-200 flex items-center focus-within:ring-2 focus-within:ring-purple-500/20 focus-within:border-blue-500/50 transition">
      <LuSearch className="text-[25px] text-neutral-600 dark:text-neutral-300 mr-2.5"/>
      <input
        type="text"
        placeholder="جستجو کنید ..."
        className="w-full h-full px-1 text-[12px] placeholder-neutral-400 focus:outline-none"
      />

      <div className="absolute left-1.5 flex items-center gap-2 text-neutral-200 text-sm">
        <RiGeminiFill className="rounded-full p-1 w-8 text-neutral-300 dark:text-neutral-900 bg-gradient-to-l from-blue-600 to-purple-600 h-8" />
        <kbd className="bg-gray-400 hidden lg:flex w-5 h-5 text-center font-bold pt-0.5 rounded text-[13px]">K</kbd>
      </div>
    </div>
  );
};

export default SearchInput;
