"use client";
import React from "react";
import { AddressBook, Calendar } from "@phosphor-icons/react";

type Props = {};

const RateSheet = (props: Props) => {
  return (
    <div className="flex flex-col mb-12">
      <div className="flex justify-between items-center gap-2 ">
        <h1 className="font-semibold text-xl mb-4">Rate Sheets</h1>
      </div>
      <div className="grid grid-cols-4 gap-y-4 text-sm bg-[#F8F9FB] px-4 py-3 border-b">
        <div className="text-[#9DA3AB] flex justify-between items-center mr-2">
          <h1>Rates Sheet</h1>
          <span>:</span>
        </div>
        <p className="col-span-3">
          Rates 1 sheet{" "}
          <span className=" text-xs px-2 py-1 rounded-md text-[#3A83E9] bg-[#EFF6FF] ml-2">
            -10% Discount
          </span>
        </p>
        <div className="text-[#9DA3AB] flex justify-between items-center mr-2">
          <h1>Start Date</h1>
          <span>:</span>
        </div>
        <div className="flex justify-between items-center col-span-3  w-fit gap-10">
          <div className="flex gap-2 justify-start items-center bg-[#EFEFF1] rounded-md px-2 py-1  w-fit">
            <Calendar size={20} />
            <h1>1 Sep 2023</h1>
          </div>
          <div className="flex items-center justify-start gap-2">
            <h1>Total Roles:</h1>
            <div className="flex gap-2 justify-start items-center bg-[#EFEFF1] rounded-md px-2 py-1 col-span-2 w-fit">
              <AddressBook size={20} />
              <h1>8</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-7 justify-end items-center px-4 py-3 text-sm font-semibold bg-[#F8F9FB]">
        <h1>History</h1>
        <h1 className="text-[#3A83E9]">Details</h1>
      </div>
    </div>
  );
};

export default RateSheet;
