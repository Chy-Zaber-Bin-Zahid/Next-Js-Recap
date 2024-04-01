"use client";

import React, { useState } from "react";
import { X, PlusCircle, Trash, Warning } from "@phosphor-icons/react";
import CvaClsxButton from "./CvaClsxButton";
import clsx from "clsx";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import AsyncSelect from "react-select/async";
import ConfigureAxiosInstance from "../utils/axiosConfig/axiosConfig";
import makeAnimated from "react-select/animated";
import { zodResolver } from "@hookform/resolvers/zod";

function RoleSlider() {
  const [sliderStatus, setSliderStatus] = useState(false);
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
    value: z.string(),
    label: z.string(),
  });

  const teamSchema = z.object({
    member: z.string().nonempty({message:"Name can't be empty."}).min(4).max(15),
    email: z.string().nonempty({message:"Email can't be empty."}).email(),
    phone: z.string(),
    role: z.array(roleSchema),
  });

  const schema = z.object({
    team: z.array(teamSchema),
  });

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      team: [
        { member: "", email: "", phone: "", roles: [{ value: "", label: "" }] },
      ],
    },
    resolver: zodResolver(schema),
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "team",
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  console.log(errors);

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
                <label htmlFor="" className="w-2/4">
                  Member Name <span className="text-red-600">*</span>
                </label>
                <div className=" flex gap-2 justify-center items-center w-full">
                  <div className="w-full">
                    <div className="flex justify-center items-center gap-2 ">
                      <input
                        className={clsx("rounded-md p-2 border w-full", {
                          "border-red-600":
                            errors &&
                            errors.team &&
                            errors.team[index] &&
                            errors.team[index].member,
                        })}
                        type="member"
                        placeholder="Member name"
                        defaultValue={field.member}
                        {...register(`team.${index}.member`, {
                          required: "Member member is required.",
                        })}
                      />
                      {index !== 0 && (
                        <Trash
                          onClick={() => {
                            remove(index);
                          }}
                          className=" text-red-600 cursor-pointer hover:animate-pulse"
                          size={20}
                        />
                      )}
                    </div>
                    {errors &&
                      errors.team &&
                      errors.team[index] &&
                      errors.team[index].member && (
                        <div className="mt-1 text-sm text-red-600 font-semibold flex gap-2 justify-start items-center">
                          <Warning size={14} />
                          <p>{errors.team[index].member.message}</p>
                        </div>
                      )}
                  </div>
                </div>
              </div>

              <div className="flex w-full">
                <label htmlFor="" className="w-2/4">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <div className=" flex gap-2 justify-center items-center w-full">
                  <div className="w-full">
                    <div className="flex justify-center items-center gap-2 ">
                      <input
                        className={clsx("rounded-md p-2 border w-full", {
                          "border-red-600":
                            errors &&
                            errors.team &&
                            errors.team[index] &&
                            errors.team[index].email,
                        })}
                        type="email"
                        placeholder="Email address"
                        defaultValue={field.email}
                        {...register(`team.${index}.email`, {
                          required: "Email address is required.",
                        })}
                      />
                    </div>
                    {errors &&
                      errors.team &&
                      errors.team[index] &&
                      errors.team[index].email && (
                        <div className="mt-1 text-sm text-red-600 font-semibold flex gap-2 justify-start items-center">
                          <Warning size={14} />
                          <p>{errors.team[index].email.message}</p>
                        </div>
                      )}
                  </div>
                </div>
              </div>

              <div className="flex w-full">
                <label htmlFor="" className="w-2/4">
                  Phone Number
                </label>
                <div className=" flex gap-2 justify-center items-center w-full">
                  <div className="w-full">
                    <div className="flex justify-center items-center gap-2  ">
                      <PhoneInput
                        placeholder="000 000 0000"
                        onChange={(e) => {
                          setValue(`team.${index}.phone`, e);
                        }}
                        country={"bd"}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex w-full">
                <label htmlFor="" className="w-2/4">
                  Select Roles
                </label>
                <div className=" flex gap-2 justify-center items-center w-full">
                  <div className="w-full">
                    <div className="flex justify-center items-center gap-2  ">
                        <AsyncSelect
                          {...field}
                          className="w-full"
                          loadOptions={loadOptions}
                          components={animatedComponents}
                          isMulti
                          placeholder="Select one or multiple role"
                          defaultOptions
                          onChange={(e) => {
                            setValue(`team.${index}.roles`, e);
                          }}
                          // {...register(`team.${index}.roles`, {
                          //   required: "Role is required.",
                          // })}
                        />
                    </div>
                    {errors &&
                      errors.team &&
                      errors.team[index] &&
                      errors.team[index].role && (
                        <div className="mt-1 text-sm text-red-600 font-semibold flex gap-2 justify-start items-center">
                          <Warning size={14} />
                          <p>Role is required.</p>
                        </div>
                      )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <CvaClsxButton
            type="button"
            intent="slider"
            size="medium"
            className="flex justify-start items-center gap-1 w-fit "
            onClick={() => {
              append({
                member: "",
                email: "",
                phone: "",
                roles: [{ value: "", label: "" }],
              });
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
