import React from 'react'

const ModalFooter = ({onClose, onSubmit}) => {
  
  const submitHandler = () => {
    onSubmit();
    onClose();
  }
  
  return (
    <div className='text-sm select-none flex gap-2 items-center'>
      <button onClick={onClose} className='flex items-center rounded-xl gap-1 cursor-pointer px-4 py-2 bg-neutral-300 font-semibold dark:bg-neutral-700'>
        <span>انصراف</span>
      </button>
      <button onClick={submitHandler} className='flex items-center rounded-xl gap-1 cursor-pointer px-5.5 py-2 dark:bg-cyan-800 font-semibold dark:text-cyan-200 text-cyan-900 bg-cyan-400'>
        <span>تایید</span>
      </button>
    </div>
  )
}

export default ModalFooter