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
import { TTarget } from "../../../../types";

const TargetInput: React.FC = () => {
  const [newTarget, setNewTarget] = useState<string | null>(null);
  const addTargetToStore = useTargetStore((state) => state.addTarget);

  const handleTargetChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTarget(e.target.value);
  };

  const hadleNewTargetClear = () => {
    setNewTarget("");
  };

  const handleAddTarget = () => {
    if (newTarget === null || newTarget === "undefined") {
      return;
    }

    const targetObj: TTarget = {
      id: v4(),
      content: newTarget,
    };

    addTargetToStore(targetObj);
  };

  return (
    <div className={targetInputWrapper}>
      <div className={inputArea}>
        <input
          className={targetInput}
          type="text"
          onChange={handleTargetChange}
        />
      </div>
      <div className={buttonArea}>
        <IoIosAddCircle className={addButton} onClick={handleAddTarget} />
        <MdClear className={clearButton} onClick={hadleNewTargetClear} />
      </div>
    </div>
  );
};

export default TargetInput;
