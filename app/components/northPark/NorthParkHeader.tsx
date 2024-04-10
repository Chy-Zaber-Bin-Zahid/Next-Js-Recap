"use client";
import React from "react";
import { X } from "@phosphor-icons/react";

type Props = {};

const NorthParkHeader = (props: Props) => {
  return (
    <div className="flex justify-between items-center py-4 px-6 bg-white">
      <h1 className="helvetica-font text-2xl font-bold">North Park Zone</h1>
      <X className="text-[#8C8C8C]" size={18} />
    </div>
  );
};

export default NorthParkHeader;
