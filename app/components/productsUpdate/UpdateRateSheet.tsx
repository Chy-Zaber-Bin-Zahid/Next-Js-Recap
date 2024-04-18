"use client";
import React, { useState } from "react";
import { components } from "react-select";
import AsyncSelect from "react-select/async";
import { CheckCircle, UserCirclePlus, UserCircle } from "@phosphor-icons/react";
import "react-datepicker/dist/react-datepicker.css";
import ConfigureAxiosInstance from "@/app/utils/axiosConfig/axiosConfig";
import MultipleInput from "./MultipleInput";

type Props = {};

const UpdateRateSheet = (props: Props) => {
  const [rateData, setRateData] = useState<any>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [saveData, setSaveData] = useState<Array<any>>([]);
  const [buttonText, setButtonText] = useState<String>("Assign members");

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
    { value: "FULL_TIME", label: "Full time" },
    { value: "PART_TIME", label: "Part time" },
  ];

  const Control = ({ children, ...props }: any) => (
    <components.Control {...props}>
      <UserCircle size={20} className="ml-1.5" /> {children}
    </components.Control>
  );

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
      console.log(response.data.teamStructures);
      const updatedSaveData = response.data.teamStructures.map((data: any) => ({
        teamRateId: data.role._id,
        employeeRoleId: data.employeeRoleId,
        employeeId: "",
        employmentStatus: "",
        internalRate: data.internalRate,
        billRate: data.billRate,
        startDate: "",
        endDate: "",
      }));
      setSaveData(updatedSaveData);
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

  // console.log(saveData);

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
            <div className=" flex gap-1 justify-center items-center font-semibold text-[#0C66E4] text-sm ">
              {buttonText === "Save members" ? (
                <CheckCircle size={16} />
              ) : (
                <UserCirclePlus size={16} />
              )}
              <button onClick={handleButtonClick}>{buttonText}</button>
            </div>
          </div>
          {buttonText === "Save members" &&
            rateData?.teamStructures.map((data: any, idx: number) => (
              <MultipleInput
                key={data._id}
                data={data}
                idx={idx}
                handleRemoveRole={handleRemoveRole}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                options={options}
                setSaveData={setSaveData}
                saveData={saveData}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default UpdateRateSheet;
