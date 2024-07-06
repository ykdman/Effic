import React, { memo } from "react";
import { addButtonWrapper, addButton } from "./AddNoteButton.css";
import { IoIosAddCircle } from "react-icons/io";
import { MdAdd } from "react-icons/md";

const AddNoteButton = () => {
  // modal open

  return (
    <button className={addButtonWrapper}>
      <MdAdd />
    </button>
  );
};

export default memo(AddNoteButton);
