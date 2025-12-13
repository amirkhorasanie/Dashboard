import React from 'react'
import LastProducts from './Components/LastProducts'
import LastUsers from './Components/LastUsers'

const QuickOverview = () => {
  return (
    <div className='space-y-10 grid grid-cols-5 mt-5 *:p-5 *rounded-3xl gap-5 *:rounded-3xl *:dark:bg-neutral-800 *:bg-white'>
      <LastProducts />
      <LastUsers />
    </div>
  )
}

export default QuickOverview