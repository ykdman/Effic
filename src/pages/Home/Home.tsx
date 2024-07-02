import { getCurrentDate } from "../../utils/func";
import { useTodoStore } from "../../store/todoStore";
import TodoTask from "../../common/components/TodoTask/TodoTask";
import { mainWrapper } from "../../App.css";
import { homeWrapper, taskInfo, taskState, taskWrapper } from "./Home.css";
import MyTarget from "../../common/components/MyTarget/MyTarget";

const Home = () => {
  const userTodo = useTodoStore((state) => state.todos);

  const today = getCurrentDate({ locale: "ko" });
  return (
    <main className={mainWrapper}>
      <section className={homeWrapper}>
        <div className={taskWrapper}>
          <div className={taskInfo}>
            {/* 목표 설정 */}
            <MyTarget />
            {/* <h3>현재까지 완료한 일</h3>
            <span>날짜 : {today}</span> */}
          </div>
          <div className={taskState}>
            {/* 오늘 할 일 */}
            {userTodo &&
              userTodo.map((todo) => <TodoTask key={todo.id} todo={todo} />)}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
