"use client";
import React from "react";
import CvaClsxButton from "./CvaClsxButton";
import { PlusCircle, MagnifyingGlass, X } from "@phosphor-icons/react";

function CompanyHeader() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <h1 className="text-sm text-[#3A83E9] font-semibold">Companies</h1>
        <h1 className="text-sm rounded-full text-[#757D87] bg-[#F4F4F5] p-2 font-semibold">
          EM
        </h1>
      </div>
      <h1 className="text-2xl font-semibold mb-4">All Companies</h1>
      <div className="flex gap-4 items-center">
        <form className="relative flex-1 ">
          <input
            className="flex-1 border-b-2 pl-10 pr-28 w-full outline-none"
            type="text"
            placeholder="Search by name, phone, email, location"
          />
          <MagnifyingGlass
            className="absolute top-1 left-2 cursor-pointer"
            size={16}
          />
          <X size={16} className="absolute right-20 top-1.5 cursor-pointer" />
          <CvaClsxButton
            size="small"
            className="flex gap-2 justify-center items-center w-fit absolute right-2 -top-1.5"
          >
            Search
          </CvaClsxButton>
        </form>
        <CvaClsxButton
          size="small"
          className="flex gap-2 justify-center items-center w-fit"
        >
          <PlusCircle size={32} /> Add company
        </CvaClsxButton>
      </div>
    </div>
  );
}

export default CompanyHeader;
