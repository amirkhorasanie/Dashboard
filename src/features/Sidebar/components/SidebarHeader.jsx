import { Link } from "react-router";

const SidebarHeader = () => {
  return (
    <div className="pb-6 border-b border-gray-400 dark:border-gray-600">
      <Link to="/" className="flex items-center gap-3">
        <img />
        <span className="text-lg font-black dark:text-zinc-200">پنل ادمین</span>
      </Link>
    </div>
  );
};

export default SidebarHeader;
