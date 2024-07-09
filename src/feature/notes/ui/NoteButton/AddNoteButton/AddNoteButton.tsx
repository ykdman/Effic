import React, { memo } from "react";
import { addButtonWrapper, addButton } from "./AddNoteButton.css";
import { MdAdd } from "react-icons/md";
import { useNoteStore } from "../../../../../store/noteStore";
import useModalStore from "../../../../../store/modalStore";

const AddNoteButton = () => {
  // modal open
  const setIsNewNote = useNoteStore((state) => state.setIsNew);
  const modalOpen = useModalStore((state) => state.modalOpen);
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
