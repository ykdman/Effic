import React, { memo } from "react";
import MyTarget from "./components/MyTarget/MyTarget";
import MyTodo from "./components/MyTodo/MyTodo";
import { homeSection, promiseArea, targetArea, taskArea } from "./Home.css";
const Home: React.FC = () => {
  return (
    <section className={homeSection}>
      <div className={taskArea}>
        <MyTodo />
      </div>
      <div className={targetArea}>
        <MyTarget />
      </div>
      <div className={promiseArea}>promise</div>
    </section>
  );
};

export default memo(Home);
