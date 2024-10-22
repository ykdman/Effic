import React, { memo } from "react";
import MyTarget from "../../feature/target/ui/MyTarget/MyTarget";

import { homeSection, noteArea, targetArea, taskArea } from "./Home.css";
import { MyNote } from "../../feature/notes/ui";
import MyTodo from "../../feature/todo/ui/MyTodo/MyTodo";

const Home: React.FC = () => {
  return (
    <section className={homeSection}>
      <div className={taskArea}>
        <MyTodo />
      </div>
      <div className={targetArea}>
        <MyTarget />
      </div>
      <div className={noteArea}>
        <MyNote />
      </div>
    </section>
  );
};

export default memo(Home);
