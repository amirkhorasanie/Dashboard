import React from 'react'

const SectionTitle = ({ title, Buttons }) => {
  return (
    <div className='flex items-center justify-between'>
      <h2 className='text-2xl font-bold font-IRANSansX'>{title}</h2>
      <div className='flex items-center gap-3'>
        {Buttons} 
      </div>
    </div>
  )
}

export default SectionTitle
