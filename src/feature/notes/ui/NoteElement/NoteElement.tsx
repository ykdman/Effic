import React, { memo } from "react";
import { TNote } from "../../../../share/types";
import {
  buttonArea,
  infoButton,
  noteElementWrapper,
  removeButton,
} from "./NoteElement.css";
import { MdInfo } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { useNoteStore } from "../../../../store/noteStore";
import { button } from "../../../../style.css";

type TNoteElemntProps = Pick<TNote, "id" | "title">;

const NoteElement: React.FC<TNoteElemntProps> = ({ id, title }) => {
  const setActiveNoteAction = useNoteStore((state) => state.setActiveNote);
  const noteInfoModalOpen = useNoteStore((state) => state.noteModalOpen);
  const setIsExistNote = useNoteStore((state) => state.setIsExist);

  const removeNote = useNoteStore((state) => state.removeNote);

  const handleInfoButton = () => {
    setActiveNoteAction(id);
    noteInfoModalOpen();
    setIsExistNote();
  };

  const handleRemoveNote = () => {
    removeNote(id);
  };

  return (
    <div className={noteElementWrapper}>
      <div>{title}</div>
      <div className={buttonArea}>
        <button
          onClick={handleInfoButton}
          className={`${button} ${infoButton}`}
        >
          <MdInfo />
        </button>
        <button
          onClick={handleRemoveNote}
          className={`${button} ${removeButton}`}
        >
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default memo(NoteElement);
