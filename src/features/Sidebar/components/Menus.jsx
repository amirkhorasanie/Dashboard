import { NavLink } from "react-router";
import clsx from "clsx";
import { FaArrowLeftLong } from "react-icons/fa6";

const Menus = ({ menus, setSidebarOpen }) => {
  return (
    <div className="space-y-4 mt-1">
      {menus.map((menu) => (
        <div key={menu.id}>
          <p className="text-xs text-neutral-600 font-semibold uppercase">{menu.title}:</p>
          <div className="mt-4 flex relative flex-col gap-2">
            {menu.items.map((nav) => (
              <NavLink
                key={nav.id}
                to={nav.href}
                onClick={() => setSidebarOpen && setSidebarOpen(false)}
                className={({ isActive }) =>
                  clsx(
                    "flex items-center gap-1 px-3 py-2.5 font-bold rounded-2xl text-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-400/10 hover:bg-black/5 transition-colors duration-150",
                    isActive &&
                      "bg-red-200/55 text-red-500 dark:text-red-400 dark:bg-white/15 relative before:absolute"
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
