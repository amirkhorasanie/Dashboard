import React from 'react'
import Filter from './Filter';
import Search from './Search';

const TableHeader = ({header}) => {
  
  const { Buttons } = header;

  return (
    <div className='flex rounded-t-3xl dark:bg-neutral-800 items-center justify-between px-5 h-[64px]'>
      <p className='text-xl'>
        <strong>{header.title}</strong>
      </p>
      
      {
        typeof Buttons === "function" ? (
        <div className='flex items-center gap-2'>{<Buttons />}</div>
        ) : (
          <div className='flex text-neutral-100 dark:text-neutral-300 *:h-10
          *:cursor-pointer *:select-none *:hover:from-transparent
          *:hover:shadow-xl *:focus-within:ring-2 *:duration-150
          *:border-2 *:border-neutral-400 *:dark:border-neutral-700 *:bg-neutral-200 *:dark:bg-neutral-900
          *:rounded-2xl *:px-3 items-center gap-3
          '>
            <Filter />
            <Search />
          </div>
        )
      }
    </div>
  )
}

export default TableHeader