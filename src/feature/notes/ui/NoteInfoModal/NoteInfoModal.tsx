import React from "react";
import { useNoteStore } from "../../../../store/noteStore";
import useModalStore from "../../../../store/modalStore";
import {
  modalBackDrop,
  modalWrapper,
  noteModalContent,
  noteModalHeader,
} from "./NoteInfoModal.css";
import { IoMdClose } from "react-icons/io";

const NoteInfoModal: React.FC = () => {
  const activeNote = useNoteStore((state) => state.activeNote);
  const modalOpen = useModalStore((state) => state.isOpen);
  const modalClose = useModalStore((state) => state.modalClose);
  const handleBackDropClick = () => {
    modalClose();
  };

  return modalOpen ? (
    <div className={modalWrapper}>
      <div className={modalBackDrop} onClick={handleBackDropClick}></div>
      <div className={noteModalContent}>
        <div className={noteModalHeader}>
          <h4>My Note</h4>
          <IoMdClose />
        </div>
        <div>
          <label htmlFor="">Note 제목</label>
          <input type="text" value={activeNote.title} />
        </div>
        <div>modal content</div>
        <div>
          <button>x</button>
        </div>
      </div>
    </div>
  ) : null;
};

export default NoteInfoModal;
