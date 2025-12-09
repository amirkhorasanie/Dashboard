import { BiBell } from "react-icons/bi";

const Notifications = () => {
  return (
    <button className="flex size-11.5 lg:size-13 dark:text-white/90 text-neutral-700 dark:bg-neutral-900 border-2 border-neutral-300 dark:border-neutral-600 bg-neutral-200 rounded-full items-center justify-center cursor-pointer hover:text-white">
      <BiBell className="text-2xl" />
    </button>
  );
};

export default Notifications;
