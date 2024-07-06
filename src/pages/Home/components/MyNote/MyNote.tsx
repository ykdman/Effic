import React, { memo, useId } from "react";
import { useNoteStore } from "../../../../store/noteStore";
import { AddNoteButton, NoteElement } from "../../../../feature/notes/ui";
import { areaTitle } from "../../../../style.css";
import { addButtonArea } from "./MyNote.css";

const MyNote: React.FC = () => {
  const notes = useNoteStore((state) => state.notes);
  const id = useId();
  return (
    <>
      <h3 className={areaTitle}>나의 메모</h3>
      <div className={addButtonArea}>
        <AddNoteButton />
      </div>
      <div>{notes && notes.map((note) => <NoteElement key={id} />)}</div>
    </>
  );
};

export default memo(MyNote);
