import { produce } from "immer";
import { v4 } from "uuid";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type TTarget = {
  id: string;
  content: string;
};

interface ITargetStroe {
  targets: TTarget[];
  addTarget: (target: TTarget) => void;
  removeTarget: (targetId: string) => void;
  // updateTarget: (target: TTarget) => void;
}

const initialTargets: TTarget[] = [
  {
    id: v4(),
    content:
      "하루에 런닝 3km씩 뛰기asddsadasadsasdasdasdasdasddasdasasdasdasdasdasdasdasasasdasadas",
  },
  { id: v4(), content: "삼시 세끼 잘 챙겨먹기" },
  { id: v4(), content: "10월 까지 -10kg 감량하기" },
];

export const useTargetStore = create<ITargetStroe>()(
  devtools(
    persist(
      (set) => ({
        targets: initialTargets,
        addTarget: (target: TTarget) =>
          set(
            produce((state: ITargetStroe) => {
              state.targets.push(target);
              // targets: [...state.targets, target],
            })
          ),
        removeTarget: (targetId: string) =>
          set(
            produce((state: ITargetStroe) => {
              state.targets = state.targets.filter(
                (target) => target.id !== targetId
              );
            })
          ),

        updateTarget: (target: TTarget) =>
          set(
            produce((state: ITargetStroe) => {
              const { id, content } = target;
              state.targets = state.targets.map((target) =>
                target.id === id
                  ? {
                      id: id,
                      content: content,
                    }
                  : target
              );
            })
          ),
      }),
      { name: "targetStore" }
    )
  )
);