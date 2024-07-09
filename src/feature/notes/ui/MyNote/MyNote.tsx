import React, { memo } from "react";
import { useNoteStore } from "../../../../store/noteStore";
import { AddNoteButton, NoteElement } from "..";
import { areaTitle } from "../../../../style.css";
import { addButtonArea, noteElementWrapper } from "./MyNote.css";
import ModalPortal from "../../../../share/ui/Modal/ModalPortal";
import NoteInfoModal from "../NoteInfoModal/NoteInfoModal";

const MyNote: React.FC = () => {
  const notes = useNoteStore((state) => state.notes);
  const isNewNote = useNoteStore((state) => state.isNew);
  const activeNote = useNoteStore((state) => state.activeNote);
  return (
    <>
      <ModalPortal>
        <NoteInfoModal isNew={isNewNote} activeNote={activeNote} />
      </ModalPortal>
      <h3 className={areaTitle}>나의 메모</h3>
      <div className={addButtonArea}>
        <AddNoteButton />
      </div>
      <div className={noteElementWrapper}>
        {notes &&
          notes.map((note) => (
            <NoteElement key={note.id} id={note.id} title={note.title} />
          ))}
      </div>
    </>
  );
};

export default memo(MyNote);
