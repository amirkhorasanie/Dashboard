import React from 'react'

const NumberUsers = ({itemsLenght}) => {
  return (
      <div>
        <p className='text-sm font-semibold text-cyan-800 dark:text-cyan-500'>
          {itemsLenght} کاربر یافت شد.
        </p>
      </div>
  )
}

export default NumberUsers