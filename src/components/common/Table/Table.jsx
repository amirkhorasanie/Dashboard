import React from 'react'
import TableHeader from './Elements/TableHeader'

const Table = ({  header = {title: "لیست آیتم ها", Button: undefined}, children}) => {

  return (
    <div className='mt-10 min-w-full bg-white'>
      <TableHeader header={header}/>
    </div>
  )
}

export default Table