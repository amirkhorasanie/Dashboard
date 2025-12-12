import React from 'react'

const TableRow = ({children}) => {
  return (
    <div className='flex *:h-14 *:flex *:items-center text-sm items-center *:justify-center flex-1 
      shrink! *:flex-1 *:shrink dark:hover:bg-neutral-900 dark:hover:even:bg-neutral-900
      dark:even:bg-neutral-800 even:bg-neutral-200/60 dark:bg-neutral-800/60
      hover:bg-neutral-200 hover:even:bg-neutral-200
    '>
      {children}
    </div>
  )
}

export default TableRow