"use client";
import React, { useState } from "react";
import Select, { components } from "react-select";
import AsyncSelect from "react-select/async";
import {
  CheckCircle,
  Copy,
  MinusCircle,
  UserCircle,
  CalendarBlank,
} from "@phosphor-icons/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ConfigureAxiosInstance from "@/app/utils/axiosConfig/axiosConfig";
import { clsx } from "clsx";

type Props = {};

const UpdateRateSheet = (props: Props) => {
  const [rateData, setRateData] = useState<any>(null);

  const [buttonText, setButtonText] = useState("Assign members");

  const handleButtonClick = () => {
    if (buttonText === "Assign members") {
      setButtonText("Save members");
    } else if (buttonText === "Save members") {
      setButtonText("Change member");
    } else {
      setButtonText("Save members");
    }
  };

  const options = [
    { value: "sheet 1", label: "Rate Sheet 1" },
    { value: "sheet 2", label: "Rate Sheet 2" },
    { value: "sheet 3", label: "Rate Sheet 3" },
  ];

  const Control = ({ children, ...props }: any) => (
    <components.Control {...props}>
      <UserCircle size={20} className="m-1.5" /> {children}
    </components.Control>
  );

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const axiosInstance = ConfigureAxiosInstance();

  const loadOptions = async (inputValue: any) => {
    try {
      const response = await axiosInstance.get(`/rate-sheet/list/dropdown`);
      const filteredOptions = response.data.data.filter((option: any) =>
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

  const handleRateSheetChange = async (selectedOption: any) => {
    setButtonText("Assign members");
    try {
      const response = await axiosInstance.get(
        `/rate-sheet/details/${selectedOption.value}`
      );
      setRateData((prev) => response.data);
    } catch (error) {
      console.error("Error fetching rate sheet details:", error);
    }
  };

  const handleRemoveRole = (id: number) => {
    // Create a copy of the teamStructures array
    const updatedTeamStructures = [...rateData.teamStructures];
    // Remove the item at the specified index
    updatedTeamStructures.splice(id, 1);
    // Update the rateData state with the modified array
    setRateData((prevRateData) => ({
      ...prevRateData,
      teamStructures: updatedTeamStructures,
    }));
  };

  console.log(rateData);

  return (
    <div className="w-[90%] mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1>
          Rate Sheet <span className="text-red-500">*</span>
        </h1>
        <AsyncSelect
          placeholder="Select a sheet"
          className="w-[210px] basis-[80%] "
          loadOptions={loadOptions}
          onChange={handleRateSheetChange}
          defaultOptions
        />
      </div>
      {rateData && (
        <div className="bg-[#F8F9FB] ">
          <div className="flex gap-2 justify-between items-center border-b p-4">
            <div className="flex gap-2 justify-center items-center ">
              <h1 className="font-semibold">
                {rateData.name} <span className="text-red-500">*</span>
              </h1>
              <p className="text-[#757D87] text-sm ">
                With {rateData?.teamStructures?.length || 0} roles
              </p>
            </div>
            <div className=" flex gap-2 justify-center items-center font-semibold text-[#0C66E4] text-sm ">
              <CheckCircle size={16} />
              <button onClick={handleButtonClick}>{buttonText}</button>
            </div>
          </div>
          {buttonText === "Save members" && rateData?.teamStructures.map((data: any, idx: number) => (
            <div
              key={data._id}
              className={clsx(
                "grid grid-cols-2 gap-x-6 gap-y-2 px-8 py-4 pb-6",
                {
                  "border-t": idx !== 0,
                }
              )}
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
                <Select
                  {...props}
                  components={{ Control }}
                  placeholder={
                    <div className="flex items-center text-sm gap-2 font-normal">
                      <span>Select</span>
                    </div>
                  }
                  className="w-full"
                  options={options}
                />
              </div>
              <div className=" flex flex-col gap-2 pb-4">
                <h1 className="font-semibold">
                  Work Type <span className="text-red-500">*</span>
                </h1>
                <Select
                  placeholder={
                    <div className=" text-sm  font-normal">Select</div>
                  }
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
                    className="pl-8 py-2.5 border rounded w-full"
                    placeholderText={`Pick a start date`}
                    selected={startDate}
                    onChange={(date: any) => setStartDate(date)}
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
                    onChange={(date: any) => setEndDate(date)}
                  />
                  <CalendarBlank
                    className="absolute top-2.5 left-2 cursor-pointer"
                    size={20}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UpdateRateSheet;
