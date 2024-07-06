import React, { memo, useEffect, useRef } from "react";
import useModalStore from "../../../../store/modalStore";
import { noteInfoModalDialog } from "./NoteInfoModal.css";

const NoteInfoModal = () => {
  const modalOpenState = useModalStore((state) => state.isOpen);
  const modalCloseAction = useModalStore((state) => state.modalClose);
  const dialog = useRef<HTMLDialogElement>(null);
  const handleCloseModal = () => {
    dialog.current!.close();
    modalCloseAction();
  };

  useEffect(() => {
    if (modalOpenState) {
      dialog.current!.showModal();
    }

    return () => {
      dialog.current!.close();
    };
  }, [modalOpenState]);

  return (
    <dialog
      ref={dialog}
      onClose={modalCloseAction}
      className={noteInfoModalDialog}
    >
      <div className="">
        <div>모달 테스트</div>
      </div>
      <button onClick={handleCloseModal}>Close</button>
    </dialog>
  );
};

export default memo(NoteInfoModal);
