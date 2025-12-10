import { NavLink } from "react-router";
import clsx from "clsx";
import { FaArrowLeftLong } from "react-icons/fa6";

const Menus = ({ menus, setSidebarOpen }) => {
  return (
    <div className="space-y-4 mt-1">
      {menus.map((menu) => (
        <div key={menu.id}>
          <p className="text-xs text-neutral-500 font-semibold uppercase">{menu.title}:</p>
          <div className="mt-4 flex relative text-neutral-500 flex-col gap-2">
            {menu.items.map((nav) => (
              <NavLink
                key={nav.id}
                to={nav.href}
                onClick={() => setSidebarOpen && setSidebarOpen(false)}
                className={({ isActive }) =>
                  clsx(
                    "flex items-center gap-1 px-3 py-2.5 font-bold rounded-2xl dark:hover:bg-cyan-600/10 dark:hover:text-cyan-500 hover:rounded-sm bg-black/5 dark:bg-black/25 transition-all hover:bg-cyan-200/60  duration-500",
                    isActive &&
                      "bg-cyan-300 text-cyan-800 dark:text-cyan-400 dark:bg-cyan-800/60 relative before:absolute"
                  )
                }
              >
                <nav.icon className="w-7 h-7 flex-shrink-0" />
                <span className="text-sm">{nav.title}</span>
                <FaArrowLeftLong className="absolute left-5"/>
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menus;
