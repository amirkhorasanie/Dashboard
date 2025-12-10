const SummaryCard = ({ title, value, Icon }) => {
  return (
    <article className="h-[150px] dark:bg-neutral-800 bg-white rounded-3xl hover:rounded-lg transition-all duration-500 lg:hover:bg-gradient-to-t dark:from-cyan-800/25 from-cyan-400/25 select-none cursor-pointer hover:shadow-md flex justify-between flex-col py-4.5 px-4">
      <div className="flex text-xl text-cyan-900 dark:text-cyan-100 font-semibold items-center justify-between">
        <p>{title}</p>
        <div className="size-2xl dark:bg-cyan-900 dark:text-cyan-300 bg-cyan-300 text-cyan-900 rounded-2xl  p-2.5 flex-center text-3xl">
          <Icon />
        </div>
      </div>
      <p className="text-4xl">
        <strong>{value}</strong>
        <span className="text-base text-zinc-600"> عدد</span>
      </p>
    </article>
  );
};

export default SummaryCard;
