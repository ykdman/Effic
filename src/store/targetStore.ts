import { v4 } from "uuid";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type TTarget = {
  id: string;
  content: string;
};

interface ITargetStroe {
  targets: TTarget[];
  addTarget: (target: TTarget) => void;
  removeTarget: (targetId: string) => void;
  updateTarget: (target: TTarget) => void;
}

const initialTargets: TTarget[] = [
  {
    id: v4(),
    content: "하루에 런닝 3km씩 뛰기",
  },
  { id: v4(), content: "삼시 세끼 잘 챙겨먹기" },
  { id: v4(), content: "10월 까지 -10kg 감량하기" },
  { id: v4(), content: "기분좋게 잠자기" },
  // { id: v4(), content: "산책 20분 하기" },
];

export const useTargetStore = create<ITargetStroe>()(
  devtools(
    immer((set) => ({
      targets: initialTargets,
      addTarget: (target: TTarget) =>
        set((state: ITargetStroe) => {
          if (state.targets.length >= 5) {
            alert("목표는 5개 까지만 입력할 수 있습니다!");
          } else {
            state.targets.push(target);
          }
          // targets: [...state.targets, target],
        }),
      removeTarget: (targetId: string) =>
        set((state: ITargetStroe) => {
          console.log("지우기");
          state.targets = state.targets.filter(
            (target) => target.id !== targetId
          );
        }),
      updateTarget: (target: TTarget) =>
        set((state: ITargetStroe) => {
          const { id, content } = target;
          console.log(id, content);
          state.targets = state.targets.map((t) =>
            t.id === id
              ? {
                  id: id,
                  content: content,
                }
              : t
          );
        }),
    })),
    { name: "targetStore" }
  )
);
