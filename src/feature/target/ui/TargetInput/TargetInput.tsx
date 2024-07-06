import React, { ChangeEvent, useState } from "react";
import {
  addButton,
  buttonArea,
  clearButton,
  inputArea,
  targetInput,
  targetInputWrapper,
} from "./TargetInput.css";
import { IoIosAddCircle } from "react-icons/io";
import { MdClear } from "react-icons/md";
import { useTargetStore } from "../../../../store/targetStore";
import { v4 } from "uuid";
import { TTarget } from "../../../../share/types";

const TargetInput: React.FC = () => {
  const [newTarget, setNewTarget] = useState<string>("");
  const addTargetToStore = useTargetStore((state) => state.addTarget);

  const handleNewTargetClear = () => {
    setNewTarget("");
  };

  const handleTargetChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTarget(e.target.value);
  };

  const handleAddTarget = () => {
    if (newTarget === null || newTarget === "undefined" || newTarget === "") {
      return;
    }

    const targetObj: TTarget = {
      id: v4(),
      content: newTarget,
    };

    addTargetToStore(targetObj);
    handleNewTargetClear();
  };

  return (
    <div className={targetInputWrapper}>
      <div className={inputArea}>
        <input
          className={targetInput}
          type="text"
          onChange={handleTargetChange}
          placeholder="목표를 입력 하세요 (간단하고 명확하게!)"
          value={newTarget!}
        />

        <div className={buttonArea}>
          <button className={addButton} onClick={handleAddTarget}>
            <IoIosAddCircle />
          </button>
          <button className={clearButton} onClick={handleNewTargetClear}>
            <MdClear />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TargetInput;
