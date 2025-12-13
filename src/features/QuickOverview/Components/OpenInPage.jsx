import React from 'react'
import { Link } from 'react-router'

const OpenInPage = ({itemsLenght, navigateTo}) => {
  return (
    <div className='flex justify-between items-center border-t-2 dark:border-neutral-700 border-neutral-200 mt-8 pt-4'>
      <div>
        <p className='text-sm font-semibold dark:text-neutral-300'>
          {itemsLenght} مورد یافت شد.
        </p>
      </div>
      <div className='dark:bg-cyan-900 bg-cyan-400 text-cyan-900 rounded-2xl py-2 font-semibold px-4 dark:text-cyan-300'>
        <Link to={navigateTo || "/"}>نمایش کامل لیست</Link>
      </div>
    </div>
  )
}

export default OpenInPage