import { v4 } from "uuid";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { getCurrentDate } from "../share/utils/func.ts";

import { TNote } from "../share/types/index.ts";

interface INoteState {
  author: string;
  notes: TNote[];
  activeNote: TNote;
}

interface INoteAction {
  addNote: (title: string, content: string) => void;
  removeNote: (noteId: string) => void;
  setActiveNote: (noteId: string) => void;
}

const initialNoteState: TNote[] = [
  {
    id: v4(),
    date: getCurrentDate(),
    content: "내일 뭐할지 정해야해",
    title: "내일 뭐하지?",
  },
  {
    id: v4(),
    date: getCurrentDate(),
    content: "테스트 노트1 내용",
    title: "테스트 노트1 제목",
  },
];

export const useNoteStore = create<INoteState & INoteAction>()(
  devtools(
    immer((set) => ({
      author: "user",
      notes: initialNoteState,
      activeNote: initialNoteState[0],
      addNote: (title: string, content: string) =>
        set((state: INoteState) => {
          state.notes.push({
            id: v4(),
            content,
            title,
            date: getCurrentDate(),
          });
        }),
      removeNote: (noteId: string) =>
        set((state: INoteState) => {
          state.notes = state.notes.filter((note) => note.id !== noteId);
        }),
      setActiveNote: (noteId: string) =>
        set((state: INoteState) => {
          state.activeNote = state.notes.find((note) => note.id === noteId)!;
        }),
    })),
    { name: "noteStore" }
  )
);
