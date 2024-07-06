import React, { memo, useState } from "react";
import { ITodo, useTodoStore } from "../../../../store/todoStore";
import { useLoaderData } from "react-router-dom";
import Todos from "./Todos/Todos";
import { getCurrentDate } from "../../../../utils/func";
import { areaTitle } from "../../../../style.css";

const MyTodo: React.FC = () => {
  const today = getCurrentDate();

  const todos = useTodoStore((state) => state.todos);

  const [todayTodos, setTodayTodos] = useState<ITodo[]>(
    todos.filter((todo) => todo.date === today)
  );

  return (
    <div>
      <div>
        <h3 className={areaTitle}>나의 할 일</h3>
      </div>
      <Todos todos={todayTodos} />
      {/* 오늘 할 일 */}
    </div>
  );
};

export default memo(MyTodo);
