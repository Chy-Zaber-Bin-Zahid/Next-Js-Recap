"use client";
import React from "react";
import CvaClsxButton from "../CvaClsxButton";
import { PlusCircle, Calendar } from "@phosphor-icons/react";

type Props = {};

const LegalDocument = (props: Props) => {
  return (
    <div className="flex flex-col ">
      <div className="flex justify-between items-center gap-2 mb-4">
        <h1 className="font-semibold text-xl ">Legal Document</h1>
        <CvaClsxButton
          intent="white"
          size="medium"
          className="flex justify-center items-center gap-2 text-sm"
        >
          <PlusCircle size={16} />
          Add new
        </CvaClsxButton>
      </div>
      <div className="grid grid-cols-3 gap-y-4 text-sm bg-[#F8F9FB] px-4 py-3 border-b">
        <div className="text-[#9DA3AB] flex justify-between items-center mr-2">
          <h1>Contract Name</h1>
          <span>:</span>
        </div>
        <p className="col-span-2">
          Smart Solution Development{" "}
          <span className="bg-black text-white px-2 py-1 rounded-md ml-2">
            Draft
          </span>
        </p>
        <div className="text-[#9DA3AB] flex justify-between items-center mr-2">
          <h1>Start - End Date</h1>
          <span>:</span>
        </div>
        <div className="flex gap-2 justify-start items-center bg-[#EFEFF1] rounded-md px-2 py-1 col-span-2 w-fit">
          <Calendar size={20} />
          <h1>1 Sep 2023 - 1 Seo 2025</h1>
        </div>
      </div>
      <div className="flex gap-7 justify-end items-center px-4 py-3 text-sm font-semibold bg-[#F8F9FB]">
        <h1>History</h1>
        <h1 className="text-[#3A83E9]">Details</h1>
      </div>
    </div>
  );
};

export default LegalDocument;
