"use client";
import React, { useState } from "react";
import {
  X,
  MagnifyingGlass,
  PencilSimpleLine,
  Calendar,
} from "@phosphor-icons/react";
import CvaClsxButton from "../CvaClsxButton";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { usePathname, useRouter } from "next/navigation";

type Props = {};

const DetailsTable = (props: Props) => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const [startDate, setStartDate] = useState(null);

  const router = useRouter();
  const currentPath = usePathname();

  const handleUpdate = () => {
    router.push(`${currentPath}/update`);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center gap-2">
        <h1 className="font-semibold">Team Structure</h1>
        <div className="flex gap-3 justify-center items-center">
          <div className="flex gap-2 justify-center items-center relative ">
            <DatePicker
              className="pl-8 py-1.5 border rounded"
              placeholderText={`Pick a start date - end date`}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            <Calendar
              className="absolute top-2 left-2 cursor-pointer"
              size={20}
            />
          </div>
          <Select
            placeholder="Filter by Work type"
            className="w-[210px]"
            options={options}
          />
          <CvaClsxButton
            onClick={() => handleUpdate()}
            className="flex gap-2 justify-center items-center"
            intent="secondary"
            size="medium"
          >
            <PencilSimpleLine size={18} />
            Edit
          </CvaClsxButton>
        </div>
      </div>
      <form className="relative flex-1 ">
        <input
          className="flex-1 border-b-2 pl-10 pr-28 w-full outline-none h-[40px]"
          type="text"
          placeholder="Search by role, member"
        />
        <MagnifyingGlass
          className="absolute top-3 left-2 cursor-pointer"
          size={16}
        />
        <X size={16} className="absolute right-20 top-3 cursor-pointer" />
        <CvaClsxButton
          intent="slider"
          size="small"
          type="submit"
          className="flex gap-2 justify-center items-center w-fit absolute right-2 top-1.5"
        >
          Search
        </CvaClsxButton>
      </form>
      <div className="grid grid-cols-7 gap-x-2 text-[#455F82] font-semibold text-sm bg-[#F8F9FB] py-3 px-5 border-b-2">
        <h1>ROLE</h1>
        <h1>MEMBER</h1>
        <h1>INTERNAL</h1>
        <h1>BILLING</h1>
        <h1>START DATE</h1>
        <h1>END DATE</h1>
        <h1>WORK TYPE</h1>
      </div>
      <div className="grid grid-cols-7 gap-x-2 py-3 px-5 border-b text-sm text-[#757D87] font-semibold ">
        <div>SmartSolutions</div>
        <div>Corina McCoy</div>
        <div>$ 63.53</div>
        <div>$ 103.15</div>
        <div>15 Oct 2023</div>
        <div>-</div>
        <div>Part time</div>
      </div>
    </div>
  );
};

export default DetailsTable;
