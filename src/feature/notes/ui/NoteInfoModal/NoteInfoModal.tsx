import React, { act, ChangeEvent, useState } from "react";
import { useNoteStore } from "../../../../store/noteStore";
import useModalStore from "../../../../store/modalStore";
import {
  closeButton,
  closeButtonArea,
  footerArea,
  footerButtonArea,
  modalBackDrop,
  modalWrapper,
  noteContentArea,
  noteModalContent,
  noteModalHeader,
  noteModalTitle,
  noteModalTitleArea,
  noteModalTitleLabel,
} from "./NoteInfoModal.css";
import { IoMdClose } from "react-icons/io";

const NoteInfoModal: React.FC = () => {
  const activeNote = useNoteStore((state) => state.activeNote);
  const modalOpen = useModalStore((state) => state.isOpen);
  const modalClose = useModalStore((state) => state.modalClose);
  const handleBackDropClick = () => {
    modalClose();
  };

  const [currentNoteTitle, setCurrentNoteTitle] = useState<string>(
    activeNote.title
  );

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentNoteTitle(e.target.value);
  };

  return modalOpen ? (
    <div className={modalWrapper}>
      <div className={modalBackDrop} onClick={handleBackDropClick}></div>
      <div className={noteModalContent}>
        <div className={noteModalHeader}>
          <h4>My Note</h4>
          <div className={closeButtonArea}>
            <button className={closeButton} onClick={modalClose}>
              <IoMdClose />
            </button>
          </div>
        </div>
        <div className={noteModalTitleArea}>
          <label htmlFor="note-title" className={noteModalTitleLabel}>
            제목
          </label>
          <input
            type="text"
            value={currentNoteTitle}
            id="note-title"
            className={noteModalTitle}
            onChange={handleTitleChange}
          />
        </div>
        <div className={noteContentArea}>modal content</div>
        <div className={footerArea}>
          <div className={footerButtonArea}>
            <button>저장</button>
            <button onClick={modalClose}>닫기</button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default NoteInfoModal;
