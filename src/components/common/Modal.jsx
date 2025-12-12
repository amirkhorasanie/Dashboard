import clsx from "clsx";
import { useState } from "react";
import { BiX } from "react-icons/bi";
import ModalFooter from "./ModalFooter";

const Modal = ({ Trigger, children, title, onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="min-w-max min-h-max cursor-pointer" onClick={openModal}>
        {Trigger}
      </div>

      <div
        id="modal-screen"
        className={clsx(
          "w-dvw h-dvh right-0 top-0 fixed z-9999 bg-black/35 backdrop-blur-xs flex-center duration-300",
          isOpen ? "" : "invisible opacity-0"
        )}
      >
        <div className="w-[500px] rounded-3xl border-2 dark:border-neutral-800 border-neutral-200 overflow-hidden dark:bg-neutral-900 bg-white max-h-[90dvh] overflow-y-auto">
          <div className="flex items-center justify-between px-4 h-16">
            <span className="text-[17px] dark:text-neutral-200 text-zinc-800 font-bold">{title}</span>
            <button
              onClick={closeModal}
              className="text-2xl! text-zinc-600 dark:text-zinc-300 cursor-pointer"
            >
              <BiX />
            </button>
          </div>
          <div
            id="modal-content"
            className="p-4 py-5 border-y-2 border-neutral-200 dark:border-neutral-800"
          >
            {children}
          </div>

          <div className="min-h-14 flex items-center justify-end gap-2 px-4 dark:bg-neutral-900 bg-[#F6F8FA]">
            <ModalFooter onSubmit={onSubmit} onClose={closeModal} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
