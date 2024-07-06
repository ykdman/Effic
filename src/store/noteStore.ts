import { v4 } from "uuid";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { getCurrentDate } from "../utils/func";

type TNote = {
  id: string;
  date: string;
  content: string;
  title: string;
};

interface INoteState {
  author: string;
  notes: TNote[];
}

interface INoteAction {
  addNote: (title: string, content: string) => void;
  removeNote: (noteId: string) => void;
}

const initialNoteState: TNote[] = [
  {
    id: v4(),
    date: getCurrentDate(),
    content: "내일 뭐할지 정해야해",
    title: "내일 뭐하지?",
  },
];

export const useNoteStore = create<INoteState & INoteAction>()(
  devtools(
    immer((set) => ({
      author: "user",
      notes: initialNoteState,
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
    })),
    { name: "noteStore" }
  )
);
