import React, { memo } from "react";
import { title, todoManageWrapper } from "./TodoManage.css";
import TodoAddForm from "./TodoAddForm/TodoAddForm";

const TodoManage: React.FC = () => {
  return (
    <section className={todoManageWrapper}>
      <h2 className={title}>Manage Todo</h2>

      <TodoAddForm />
    </section>
  );
};

export default memo(TodoManage);
