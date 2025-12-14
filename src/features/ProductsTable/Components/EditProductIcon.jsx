import React from 'react'
import Modal from '../../../components/common/Modal'
import { BiEdit } from 'react-icons/bi';

const EditProductIcon = () => {
  const Trigger = () => (
  <button className='cursor-pointer text-xl'>
    <BiEdit />
  </button>
  );
  return <Modal title="تغییر جزییات محصول" Trigger={<Trigger />}></Modal>
}

export default EditProductIcon