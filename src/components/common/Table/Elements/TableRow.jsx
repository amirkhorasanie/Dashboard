import React from 'react'

const TableRow = ({children}) => {
  return (
    <div className='flex *:h-14 *:flex *:items-center text-sm items-center *:px-3 flex-1 
      shrink! *:flex-1 *:shrink dark:even:bg-neutral-800 even:bg-neutral-200/60 dark:bg-neutral-800/60
    '>
      {children}
    </div>
  )
}

export default TableRow