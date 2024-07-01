import { useEffect, useState } from "react";
import { getCurrentDate } from "../../utils/func";
import { useGetUserTodos } from "../../hooks";

const Home = () => {
  const [userTodoData, setUserTodoData] = useState(null);

  useEffect(() => {
    async function getUserTodoData() {
      const data = await useGetUserTodos();
      console.log(data);
    }

    getUserTodoData();
  }, []);

  const today = getCurrentDate({ locale: "ko" });
  return (
    <section>
      <div>
        <div>오늘 할 일</div>
        <div>날짜 : {today}</div>
        <div></div>
      </div>
    </section>
  );
};

export default Home;
