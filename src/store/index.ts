import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface ITodo {
  id: string;
  date: string;
  name: string;
  priority: number;
  done: boolean;
}

interface IStore {
  todos: ITodo[];
  addTodo: (todo: ITodo) => void;
}

const initialTodos: ITodo[] = [
  {
    id: "todo-kdman-1",
    name: "밥먹기",
    priority: 1,
    date: "2024-06-28T07:32:23.518Z",
    done: false,
  },
  {
    id: "todo-kdman-2",
    name: "잠자기",
    priority: 2,
    date: "2024-06-28T05:32:23.518Z",
    done: false,
  },
  {
    id: "todo-kdman-3",
    name: "장보기",
    priority: 3,
    date: "2024-06-28T07:35:23.518Z",
    done: false,
  },
];

// export const useTodoStore = create<IStore>()((set) => ({
//   todos: initialTodos,
//   addTodo: (todo: ITodo) => set((state) => ({ todos: [...state.todos, todo] })),
// }));

export const useTodoStore = create<IStore>()(
  devtools(
    persist(
      (set) => ({
        todos: initialTodos,
        addTodo: (todo: ITodo) =>
          set((state) => ({ todos: [...state.todos, todo] })),
      }),
      { name: "todoStore" }
    )
  )
);
