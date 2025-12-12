import React from 'react'
import Modal from '../../../components/common/Modal'
import { HiOutlineTrash } from 'react-icons/hi'

const RemoveProductIcon = ({ product, handler}) => {
  const Trigger = () => (
  <button className='cursor-pointer text-xl'>
    <HiOutlineTrash />
  </button>
  );

  return (
  <Modal title="حذف محصول" Trigger={<Trigger />} 
    onSubmit={() => handler(product.id)}
  >
    <div className='flex items-center justify-center'>
      آیا از حذف محصول
    <kbd className='px-2 py-1 mx-2 bg-red-200 text-red-900 dark:bg-red-900 dark:text-red-200 rounded-md font-black'>{product.title}</kbd>
    اطمینان دارید؟
    </div>
  </Modal>
  )
}

export default RemoveProductIcon