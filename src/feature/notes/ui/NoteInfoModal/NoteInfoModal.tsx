import React, { ChangeEvent, memo, useEffect, useState } from "react";
import { useNoteStore } from "../../../../store/noteStore";
import {
  closeButton,
  closeButtonArea,
  footerArea,
  footerButtonArea,
  footerCloseButton,
  footerSaveButton,
  modalBackDrop,
  modalWrapper,
  noteContentArea,
  noteContentLabel,
  noteContentText,
  noteModalContent,
  noteModalHeader,
  noteModalTitle,
  noteModalTitleArea,
  noteModalTitleLabel,
} from "./NoteInfoModal.css";
import { IoMdClose } from "react-icons/io";
import { TNote } from "../../../../share/types";

type TNtoeInfoModalProps = {
  isNew: boolean;
  activeNote: TNote;
};
const NoteInfoModal: React.FC<TNtoeInfoModalProps> = ({
  isNew,
  activeNote,
}) => {
  const addNewNote = useNoteStore((state) => state.addNote);
  const updateNote = useNoteStore((state) => state.updateNote);

  const modalOpen = useNoteStore((state) => state.noteModalisOpen);
  const modalClose = useNoteStore((state) => state.noteModalClose);

  const [currentNoteTitle, setCurrentNoteTitle] = useState<string>(
    isNew ? "" : activeNote.title
  );

  const [currentContent, setCurrentContent] = useState<string>(
    isNew ? "" : activeNote.content
  );
  const handleBackDropClick = () => {
    modalClose();
  };
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentNoteTitle(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentContent(e.target.value);
  };

  const handleSaveNote = () => {
    if (isNew) {
      addNewNote({ title: currentNoteTitle, content: currentContent });
    } else {
      updateNote(activeNote.id, currentNoteTitle, currentContent);
    }
    modalClose();
  };

  useEffect(() => {
    setCurrentNoteTitle(() => {
      return isNew ? "" : activeNote.title;
    });
    setCurrentContent(() => {
      return isNew ? "" : activeNote.content;
    });
  }, [isNew, activeNote]);

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
        <div className={noteContentArea}>
          <label htmlFor="note-content" className={noteContentLabel}>
            내용
          </label>
          <textarea
            id="note-content"
            cols={30}
            rows={20}
            className={noteContentText}
            value={currentContent}
            onChange={handleContentChange}
          ></textarea>
        </div>
        <div className={footerArea}>
          <div className={footerButtonArea}>
            <button className={footerCloseButton} onClick={modalClose}>
              닫기
            </button>
            <button className={footerSaveButton} onClick={handleSaveNote}>
              저장
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default memo(NoteInfoModal);
