import { useContext } from "react";
import ThemeContext from "./../context/Theme";
import { PiMoonBold } from "react-icons/pi";
import { PiSunBold } from "react-icons/pi";

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="w-11.5 h-11.5 lg:h-13 lg:w-13 flex rounded-full dark:text-white/90 text-neutral-700 dark:bg-neutral-900 border-2 border-neutral-300 dark:border-neutral-600 bg-neutral-200 items-center justify-center cursor-pointer hover:text-white">
    <button className="cursor-pointer" onClick={toggleTheme}>
      {theme === "dark" ? 
      < PiSunBold className='text-2xl hover:text-gray-700 dark:hover:text-white
      transition-transform duration-400 hover:scale-110'/>
      : 
      <PiMoonBold className='text-2xl hover:text-gray-700 dark:hover:text-white
      transition-transform duration-400 hover:scale-110'
      />}
    </button>
    </div>
  );
};

export default ThemeButton;
