"use client";

import React, { useState } from "react";
import { X, PlusCircle, Trash } from "@phosphor-icons/react";
import CvaClsxButton from "./CvaClsxButton";
import clsx from "clsx";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import "react-phone-input-2/lib/style.css";
import ConfigureAxiosInstance from "../utils/axiosConfig/axiosConfig";
import makeAnimated from "react-select/animated";

type RoleSliderProps = {
  sliderStatus: boolean;
  setSliderStatus: React.Dispatch<React.SetStateAction<boolean>>;
};
function RoleSlider({ sliderStatus, setSliderStatus }: RoleSliderProps) {
  const axiosInstance = ConfigureAxiosInstance();
  const animatedComponents = makeAnimated();

  const loadOptions = async (inputValue: any) => {
    const response = await axiosInstance.get(`/employee-role/list/dropdown`);
    const arr = response.data.map((data: any) => {
      return { value: data._id, label: data.name };
    });
    console.log(arr);
    return arr;
  };

  const roleSchema = z.object({
    name: z.string().nonempty().min(4).max(15),
    details: z.string().nonempty().min(8).max(250),
  });

  const schema = z.object({
    roles: z.array(roleSchema),
  });

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      role: [{ name: "", details: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "role",
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  // console.log(errors);

  return (
    <>
      <CvaClsxButton
        onClick={() => {
          setSliderStatus(!sliderStatus);
        }}
        className="mt-2"
        intent="secondary"
        size="large"
      >
        Slider
      </CvaClsxButton>
      <div
        className={clsx(
          "absolute top-0 right-0 bg-white h-screen transition-all duration-300 w-[500px] overflow-y-auto shadow-lg  flex flex-col gap-2",
          { "translate-x-[0px]": sliderStatus },
          { "translate-x-full": !sliderStatus }
        )}
      >
        <div className="flex flex-col justify-between items-start p-6 pb-4 relative bg-[#F8F9FB]">
          <h1 className="font-semibold text-xl">Add Member Profile</h1>
          <p className="text-sm text-[#9DA3AA] ">
            Get started by filling in the information to create new member
            profile.
          </p>
          <X
            onClick={() => {
              setSliderStatus(false);
            }}
            className="absolute cursor-pointer top-8 right-3.5 text-[#9DA3AA] hover:animate-spin"
            size={16}
          />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col m-4 gap-4  h-full"
        >
          {fields.map((field: any, index: number) => (
            <div
              key={field.id}
              className="bg-[#F8F9FB]  flex flex-col justify-center items-center gap-6 p-6  rounded-md"
            >
              <div className="flex w-full">
                <label htmlFor={`role.${index}.name`} className="w-1/3">
                  Role name <span className="text-red-600">*</span>
                </label>
                <div className=" flex gap-2 justify-center items-center w-full">
                  <input
                    className="rounded-md p-2 border w-full"
                    type="text"
                    placeholder="Role name"
                    defaultValue={field.name}
                    {...register(`role.${index}.name`, {
                      required: "Role name is required!",
                    })}
                  />
                  {index !== 0 && (
                    <Trash
                      onClick={() => {
                        remove(index);
                      }}
                      className="text-red-600 cursor-pointer hover:animate-pulse"
                      size={20}
                    />
                  )}
                </div>
              </div>

              {errors &&
                errors.role &&
                errors.role[index] &&
                errors.role[index].name && (
                  <p className="text-red-600">
                    {errors.role[index].name.message}
                  </p>
                )}

              <div className="flex w-full">
                <label htmlFor="" className="w-1/3">
                  Role details
                </label>
                <div className="flex flex-col gap-3 w-full">
                  <textarea
                    className="resize-none  rounded-md p-2 h-20 border"
                    placeholder="Role details"
                    defaultValue={field.details}
                    {...register(`role.${index}.details`, {
                      required: "Role details is required!",
                    })}
                  />
                  <p className="text-[#9DA3AA] text-sm">
                    Keep role details under 250 characters.
                  </p>
                </div>
              </div>
              {errors &&
                errors.role &&
                errors.role[index] &&
                errors.role[index].details && (
                  <p className="text-red-600">
                    {errors.role[index].details.message}
                  </p>
                )}
            </div>
          ))}

          <CvaClsxButton
            type="button"
            intent="slider"
            size="medium"
            className="flex justify-start items-center gap-1 w-fit "
            onClick={() => {
              append({ name: "", details: "" });
            }}
          >
            <PlusCircle size={14} />
            <h1>Add more</h1>
          </CvaClsxButton>

          <div className="h-full flex gap-4 justify-end items-end">
            <CvaClsxButton
              type="button"
              className=""
              intent="slider"
              size="medium"
              onClick={() => {
                setSliderStatus(false);
              }}
            >
              Cancel
            </CvaClsxButton>

            <CvaClsxButton
              type="submit"
              className=""
              intent="secondary"
              size="medium"
            >
              Create
            </CvaClsxButton>
          </div>
        </form>
      </div>
    </>
  );
}

export default RoleSlider;
