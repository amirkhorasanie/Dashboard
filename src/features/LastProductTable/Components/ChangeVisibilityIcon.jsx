import React from 'react'
import Modal from '../../../components/common/Modal'
import { HiEye } from 'react-icons/hi';
import clsx from 'clsx';

const ChangeVisibilityIcon = ({ handler, product }) => {
  const Trigger = () => (
  <button className='cursor-pointer text-xl'>
    <HiEye />
  </button>
  );

  return (
  <Modal 
  title="تغییر وضعیت انتشار" 
  Trigger={<Trigger />} 
  onSubmit={() => handler(product.id)}
  >
    <div className='flex justify-center items-center'>
      <p>
        آیا از {" "}
        <span className={clsx(
          product.isPublished ? "text-blue-500" : "text-green-500"
        )}
        >
          {" "}
          <strong>
            {product.isPublished ? "خصوصی" : "عمومی"}
          </strong>
        </span> {" "}
        کردن این محصول اطمینان دارید؟
      </p>
    </div>
  </Modal>
  );
}

export default ChangeVisibilityIcon