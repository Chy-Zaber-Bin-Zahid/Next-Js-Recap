import React, { useState } from "react";
import { Copy, MinusCircle, CalendarBlank } from "@phosphor-icons/react";
import { clsx } from "clsx";
import Select from "react-select";
import DatePicker from "react-datepicker";
import AsyncSelect from "react-select/async";
import ConfigureAxiosInstance from "@/app/utils/axiosConfig/axiosConfig";

type MultipleInputProps = {
  data: any;
  idx: number;
  handleRemoveRole: (id: string) => void;
  startDate: Date | null;
  setStartDate: (date: Date | null) => void;
  endDate: Date | null;
  setEndDate: (date: Date | null) => void;
  options: { value: string; label: string }[];
  setSaveData: (data: Array<any>) => void;
  saveData: any;
  buttonText: string;
};

const MultipleInput = ({
  data,
  idx,
  handleRemoveRole,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  options,
  setSaveData,
  saveData,
  buttonText
}: MultipleInputProps) => {
  const [rateData, setRateData] = useState<any>(null);
  const axiosInstance = ConfigureAxiosInstance();

  const handleWorkTypeChange = (selectedOption: any) => {
    // Update saveData with the selected work type
    const updatedSaveData = saveData.map((item) => {
      if (item.teamRateId === data.role._id) {
        return { ...item, employmentStatus: selectedOption.value };
      }
      return item;
    });
    setSaveData(updatedSaveData);
  };

  const handleStartDateChange = (date: Date | null) => {
    // Update saveData with the selected start date
    const updatedSaveData = saveData.map((item) => {
      if (item.teamRateId === data.role._id) {
        const modifyDate = new Date(date);
        return { ...item, startDate: modifyDate.toISOString() };
      }
      return item;
    });
    setSaveData(updatedSaveData);
    setStartDate(date); // Update local state for startDate
  };

  const handleEndDateChange = (date: Date | null) => {
    // Update saveData with the selected end date
    const updatedSaveData = saveData.map((item) => {
      if (item.teamRateId === data.role._id) {
        const modifyDate = new Date(date);
        return { ...item, endDate: modifyDate.toISOString() };
      }
      return item;
    });
    setSaveData(updatedSaveData);
    setEndDate(date);
  };

  const loadOptions = async (inputValue: any) => {
    try {
      const response = await axiosInstance.get(
        `/employee/list/active/roleId?roleId=${data.role._id}`
      );
      const filteredOptions = response.data.filter((option: any) =>
        option.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      const options = filteredOptions.map((item: any) => ({
        value: item._id,
        label: item.name,
      }));

      return options;
    } catch (error) {
      console.error("Error fetching options:", error);
      return [];
    }
  };

  const handleTeamMemberChange = (selectedOption: any) => {
    const updatedSaveData = saveData.map((item) => {
      if (item.teamRateId === data.role._id) {
        return { ...item, employeeId: selectedOption.value };
      }
      return item;
    });
    setSaveData(updatedSaveData);
  };
  console.log(saveData);
  return (
    <div
      className={clsx("grid grid-cols-2 gap-x-6 gap-y-2 px-8 py-4 pb-6", {
        "border-t": idx !== 0,
        "hidden": buttonText === "Save members"
      })}
    >
      <div className="col-span-2 flex flex-col gap-1 border-b pb-2 text-lg ">
        <div className="flex justify-between items-center gap-2 font-semibold">
          <h1>{data.role.name}</h1>
          <div className="flex gap-4 justify-center items-center">
            <Copy size={18} />
            <p className="text-sm">Duplicate role</p>
            <MinusCircle
              onClick={() => handleRemoveRole(data._id)}
              className="text-red-500 cursor-pointer hover:animate-spin"
              size={16}
            />
          </div>
        </div>
        <div className="flex justify-start items-center gap-4 text-[#757D87] text-xs">
          <p>Internal Rate: $ {data.internalRate} /hr</p>
          <p>Billing Rate: $ {data.billRate} /hr</p>
        </div>
      </div>
      <div className=" flex flex-col gap-2 ">
        <h1 className="font-semibold">
          Team Member <span className="text-red-500">*</span>
        </h1>
        <AsyncSelect
          placeholder={
            <div className="flex items-center text-sm font-normal">
              <span>Select</span>
            </div>
          }
          loadOptions={loadOptions}
          onChange={handleTeamMemberChange}
          defaultOptions
          className="w-full"
        />
      </div>
      <div className=" flex flex-col gap-2 pb-4">
        <h1 className="font-semibold">
          Work Type <span className="text-red-500">*</span>
        </h1>
        <Select
          placeholder={<div className=" text-sm  font-normal">Select</div>}
          className="w-full"
          options={options}
          onChange={handleWorkTypeChange}
        />
      </div>
      <div className="font-semibold flex flex-col gap-2 ">
        <h1>
          Start Date <span className="text-red-500">*</span>
        </h1>
        <div className="relative font-normal text-sm">
          <DatePicker
            className="pl-8 py-2.5 border rounded w-full"
            placeholderText={`Pick a start date`}
            selected={startDate}
            onChange={handleStartDateChange}
          />
          <CalendarBlank
            className="absolute top-2.5 left-2 cursor-pointer"
            size={20}
          />
        </div>
      </div>
      <div className="font-semibold flex flex-col gap-2 ">
        <h1>End Date</h1>
        <div className=" relative font-normal text-sm">
          <DatePicker
            className="pl-8 py-2.5 border rounded w-full"
            placeholderText={`Pick a end date`}
            selected={endDate}
            onChange={handleEndDateChange}
          />
          <CalendarBlank
            className="absolute top-2.5 left-2 cursor-pointer"
            size={20}
          />
        </div>
      </div>
    </div>
  );
};

export default MultipleInput;
