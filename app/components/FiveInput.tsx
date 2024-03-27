import { FaTrash } from "react-icons/fa";
import React, { useState } from "react";

type Input = {
  id: number;
  handleDelete: (id: number) => void;
};

function FiveInput({ id, handleDelete }: Input) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const onDelete = () => {
    handleDelete(id);
  };

  return (
    <div className="flex gap-2 justify-center items-center">
      <input
        type="text"
        value={inputValue}
        placeholder={`Input: ${id}`}
        onChange={(e) => handleInputChange(e.target.value)}
        className="w-full px-3 py-1 border border-black rounded-md focus:outline-none focus:border-blue-500"
      />
      <FaTrash
        onClick={onDelete}
        className="text-red-500 cursor-pointer hover:animate-pulse"
      />
    </div>
  );
}

export default FiveInput;
