import React from "react";
import { todoPageSection, todoPageContent } from "./TodoPage.css";
import { TodoManage, TodoDisplay } from "../../feature/todo/ui";
import { useTodoStore } from "../../store/todoStore";
import useGetTodos from "../../hooks/useFetchTodos";

const TodoPage = () => {
  // const todos = useTodoStore((state) => state.todos);
  const todos = useGetTodos();

  return (
    <section className={todoPageSection}>
      <div className={todoPageContent}>
        <TodoManage />
        <TodoDisplay todos={todos} />
      </div>
    </section>
  );
};

export default TodoPage;
