import React, { memo } from "react";
import { title, todoManageWrapper } from "./TodoManage.css";
import TodoAddForm from "./TodoAddForm/TodoAddForm";

const TodoManage: React.FC = () => {
  return (
    <section className={todoManageWrapper}>
      <p className={title}>
        <h2>Manage Todo</h2>
      </p>
      <TodoAddForm />
    </section>
  );
};

export default memo(TodoManage);
