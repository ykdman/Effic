import { useEffect, useState } from "react";
import { getCurrentDate } from "../../utils/func";
import { useGetUserTodos } from "../../hooks";
import { ITodo, useTodoStore } from "../../store";
import TodoTask from "../../common/components/TodoTask/TodoTask";
import { mainWrapper } from "../../App.css";
import { homeWrapper, taskInfo, taskState, taskWrapper } from "./Home.css";

const Home = () => {
  const userTodo = useTodoStore((state) => state.todos);

  const today = getCurrentDate({ locale: "ko" });
  return (
    <main className={mainWrapper}>
      <section className={homeWrapper}>
        <div className={taskWrapper}>
          <div className={taskInfo}>
            <h3>현재까지 완료한 일</h3>
            <span>날짜 : {today}</span>
          </div>
          <div className={taskState}>
            {userTodo &&
              userTodo.map((todo) => <TodoTask key={todo.id} todo={todo} />)}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
