import { v4 } from "uuid";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { getCurrentDate } from "../utils/func";

export interface ITodo {
  id: string;
  date: string;
  content: string;
  priority: number;
  done: boolean;
}

interface ITodoStore {
  todos: ITodo[];
  addTodo: (todo: ITodo) => void;
}

const initialTodos: ITodo[] = [
  {
    id: "todo-kdman-1",
    content: "밥먹기",
    priority: 1,
    date: "2024-06-28",
    done: false,
  },
  {
    id: "todo-kdman-2",
    content: "잠자기",
    priority: 2,
    date: "2024-06-28",
    done: false,
  },
  {
    id: "todo-kdman-3",
    content: "장보기",
    priority: 3,
    date: "2024-06-28",
    done: false,
  },
  {
    id: v4(),
    content: "운동하기",
    priority: 3,
    date: getCurrentDate(),
    done: false,
  },
];

// export const useTodoStore = create<IStore>()((set) => ({
//   todos: initialTodos,
//   addTodo: (todo: ITodo) => set((state) => ({ todos: [...state.todos, todo] })),
// }));

export const useTodoStore = create<ITodoStore>()(
  devtools(
    immer((set) => ({
      todos: initialTodos,
      addTodo: (todo: ITodo) =>
        set((state: ITodoStore) => {
          state.todos.push(todo);
        }),
    })),
    { content: "todoStore" }
  )
);
