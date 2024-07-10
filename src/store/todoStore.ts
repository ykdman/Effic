import { v4 } from "uuid";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { getCurrentDate } from "../share/utils/func";

export interface ITodo {
  id: string;
  content: string;
  priority: number;
  done: boolean;
}

interface ITodoStore {
  todos: ITodo[];
  todoModalIsOpen: boolean;
  activeTodo: ITodo;
  addTodo: (todo: ITodo) => void;
  todoModalOpenAction: () => void;
  todoModalCloseAction: () => void;
  setActiveTodo: (todoId: string) => void;
}

const initialTodos: ITodo[] = [
  {
    id: "todo-kdman-1",
    content: "밥먹기",
    priority: 1,
    done: false,
  },
  {
    id: "todo-kdman-2",
    content: "잠자기",
    priority: 2,
    done: false,
  },
  {
    id: "todo-kdman-3",
    content: "장보기",
    priority: 3,
    done: false,
  },
  {
    id: v4(),
    content: "운동하기",
    priority: 3,
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
      activeTodo: initialTodos[0],
      todoModalIsOpen: false,
      addTodo: (todo: ITodo) =>
        set((state: ITodoStore) => {
          state.todos.push(todo);
        }),
      toggleTodoDone: (todoId: string) =>
        set((state: ITodoStore) => {
          state.todos = state.todos.map((todo: ITodo) =>
            todo.id === todoId ? { ...todo, done: !todo.done } : todo
          );
        }),
      setActiveTodo: (todoId: string) =>
        set((state: ITodoStore) => {
          state.activeTodo = state.todos.find((todo) => todo.id === todoId)!;
        }),
      todoModalOpenAction: () =>
        set((state: ITodoStore) => {
          state.todoModalIsOpen = true;
        }),
      todoModalCloseAction: () =>
        set((state: ITodoStore) => {
          state.todoModalIsOpen = false;
        }),
    })),
    { content: "todoStore" }
  )
);
