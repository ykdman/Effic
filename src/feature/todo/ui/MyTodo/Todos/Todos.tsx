import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TodoCard from "../../TodoCard/TodoCard";
import { useTodoStore } from "../../../../../store/todoStore";
import { Navigation, Pagination } from "swiper/modules";
import { swiperWrapper } from "./Todos.css";

const Todos: React.FC = () => {
  const todos = useTodoStore((state) => state.todos);
  return (
    <div className={swiperWrapper}>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        centeredSlides={true}
        autoplay={false}
        pagination={{
          clickable: true,
        }}
        rewind={true}
        freeMode={true}
        scrollbar={{ draggable: true }}
        modules={[Pagination, Navigation]}
        navigation={true}
      >
        {todos &&
          todos.map((todo) => (
            <SwiperSlide key={todo.id}>
              <TodoCard
                // key={todo.id}
                content={todo.content}
                id={todo.id}
                priority={todo.priority}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Todos;
