import React, { memo } from "react";
import { TNote } from "../../../../share/types";
import { noteElementWrapper } from "./NoteElement.css";
import { MdInfo } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { useNoteStore } from "../../../../store/noteStore";
import useModalStore from "../../../../store/modalStore";

type TNoteElemntProps = Pick<TNote, "id" | "title">;

const NoteElement: React.FC<TNoteElemntProps> = ({ id, title }) => {
  const setActiveNoteAction = useNoteStore((state) => state.setActiveNote);
  const noteInfoModalOpen = useModalStore((state) => state.modalOpen);

  const handleInfoButton = () => {
    setActiveNoteAction(id);
    noteInfoModalOpen();
  };

  return (
    <div className={noteElementWrapper}>
      <div>{title}</div>
      <div>
        <button onClick={handleInfoButton}>
          <MdInfo />
        </button>
        <button>
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default memo(NoteElement);
