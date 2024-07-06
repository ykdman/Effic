import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface IModalState {
  isOpen: boolean;
}

interface IModalAction {
  modalOpen: () => void;
  modalClose: () => void;
}

const useModalStore = create<IModalState & IModalAction>()(
  devtools(
    immer((set) => ({
      isOpen: false,
      modalClose: () =>
        set((state: IModalState) => {
          state.isOpen = false;
          console.log(state.isOpen);
        }),
      modalOpen: () =>
        set((state: IModalState) => {
          state.isOpen = true;
          console.log(state.isOpen);
        }),
    })),
    { name: "modalStore" }
  )
);

export default useModalStore;
