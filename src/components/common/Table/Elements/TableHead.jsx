const TableHead = ({ children }) => {
  return (
    <div className='grow flex *flex-1 *:shrink items-center
    text-sm bg-cyan-300 text-cyan-900 dark:text-cyan-300 dark:bg-cyan-800/55 h-10 *:grow *:px-3 text-red *:font-semibold'
    >
    {children}
    </div>
  )
}

export default TableHead