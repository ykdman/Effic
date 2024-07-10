import React, { memo } from "react";
import { addButtonWrapper, addButton } from "./AddNoteButton.css";
import { MdAdd } from "react-icons/md";
import { useNoteStore } from "../../../../../store/noteStore";

const AddNoteButton = () => {
  // modal open
  const setIsNewNote = useNoteStore((state) => state.setIsNew);
  const modalOpen = useNoteStore((state) => state.noteModalOpen);
  const handleNewNoteButton = () => {
    setIsNewNote();
    modalOpen();
  };
  return (
    <button className={addButtonWrapper} onClick={handleNewNoteButton}>
      <MdAdd />
    </button>
  );
};

export default memo(AddNoteButton);
