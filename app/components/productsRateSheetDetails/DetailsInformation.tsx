"use client";
import React from "react";
import { Calendar, AddressBook } from "@phosphor-icons/react";

type Props = {};

const DetailsInformation = (props: Props) => {
  return (
    <div className="w-[450px] ">
      <h1 className="font-semibold mb-2">Information</h1>
      <div className="grid grid-cols-2 gap-2 text-sm font-semibold text-[#757D87] ">
        <h1>Rates Sheet</h1>
        <h1 className="flex justify-start gap-2 items-center text-black ">
          <span>:</span> Rates 1 Sheet
          <span className=" text-xs px-2 py-1 rounded-md text-[#3A83E9] bg-[#EFF6FF]">
            -10% Discount
          </span>
        </h1>
        <h1>Start Date</h1>
        <h1 className="flex justify-start gap-2 items-center text-black ">
          : <Calendar size={14} /> 1 Sep 2023
        </h1>
        <h1>Total Roles</h1>
        <h1 className="flex justify-start gap-2 items-center text-black ">
          : <AddressBook size={14} /> 8
        </h1>
      </div>
    </div>
  );
};

export default DetailsInformation;
