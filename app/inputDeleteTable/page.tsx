"use client";

import React, { useState } from "react";
import FiveInput from "../components/FiveInput";

export default function InputFields() {
  const [inputFields, setInputFields] = useState(
    Array.from({ length: 5 }, (_, index) => ({ id: index + 1 }))
  );

  const handleDelete = (idToRemove: number) => {
    const updatedFields = inputFields.filter(
      (input) => input.id !== idToRemove
    );
    setInputFields(updatedFields);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-1 gap-4">
        <h1 className="text-center text-xl font-semibold">
          5 Input With Delete Icon
        </h1>
        {inputFields.map(({ id }) => (
          <FiveInput key={id} id={id} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
