"use client";
import React, { useState } from "react";
import Select from "react-select";
import {
  CheckCircle,
  Copy,
  MinusCircle,
  UserCircle,
  CalendarBlank,
} from "@phosphor-icons/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {};

const UpdateRateSheet = (props: Props) => {
  const options = [
    { value: "sheet 1", label: "Rate Sheet 1" },
    { value: "sheet 2", label: "Rate Sheet 2" },
    { value: "sheet 3", label: "Rate Sheet 3" },
  ];

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="w-[90%] mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1>
          Rate Sheet <span className="text-red-500">*</span>
        </h1>
        <Select
          placeholder="Select a sheet"
          className="w-[210px] basis-[80%] "
          options={options}
        />
      </div>
      <div className="bg-[#F8F9FB] ">
        <div className="flex gap-2 justify-between items-center border-b p-4">
          <div className="flex gap-2 justify-center items-center ">
            <h1 className="font-semibold">
              Rate Sheet <span className="text-red-500">*</span>
            </h1>
            <p className="text-[#757D87] text-sm ">With 10 roles</p>
          </div>
          <div className=" flex gap-2 justify-center items-center font-semibold text-[#0C66E4] text-sm ">
            <CheckCircle size={16} />
            <h1>Save members</h1>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 px-8 py-4 pb-6">
          <div className="col-span-2 flex flex-col gap-1 border-b pb-2 text-lg ">
            <div className="flex justify-between items-center gap-2 font-semibold">
              <h1>Full-Stack Developer</h1>
              <div className="flex gap-4 justify-center items-center">
                <Copy size={18} />
                <p className="text-sm">Duplicate role</p>
                <MinusCircle className="text-red-500" size={16} />
              </div>
            </div>
            <div className="flex justify-start items-center gap-4 text-[#757D87] text-xs">
              <p>Internal Rate: $ 110 /hr</p>
              <p>Billing Rate: $ 140 /hr</p>
            </div>
          </div>
          <div className="font-semibold flex flex-col gap-2 ">
            <h1>
              Team Member <span className="text-red-500">*</span>
            </h1>
            <Select
              placeholder={
                <div className="flex items-center text-sm gap-2 font-normal">
                  <UserCircle size={20} />
                  <span>Select</span>
                </div>
              }
              className="w-full"
              options={options}
            />
          </div>
          <div className="font-semibold flex flex-col gap-2 ">
            <h1>
              Work Type <span className="text-red-500">*</span>
            </h1>
            <Select
              placeholder={<div className=" text-sm  font-normal">Select</div>}
              className="w-full"
              options={options}
            />
          </div>
          <div className="font-semibold flex flex-col gap-2 ">
            <h1>
              Start Date <span className="text-red-500">*</span>
            </h1>
            <div className="relative font-normal text-sm">
              <DatePicker
                className="pl-8 py-1.5 border rounded w-full"
                placeholderText={`Pick a start date`}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
              <CalendarBlank
                className="absolute top-2 left-2 cursor-pointer"
                size={20}
              />
            </div>
          </div>
          <div className="font-semibold flex flex-col gap-2 ">
            <h1>End Date</h1>
            <div className=" relative font-normal text-sm">
              <DatePicker
                className="pl-8 py-1.5 border rounded w-full"
                placeholderText={`Pick a end date`}
                selected={endDate}
                onChange={(date) => setEndDate(date)}
              />
              <CalendarBlank
                className="absolute top-2 left-2 cursor-pointer"
                size={20}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateRateSheet;
