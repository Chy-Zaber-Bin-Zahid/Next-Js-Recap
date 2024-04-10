"use client";

import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ConfigureAxiosInstance from "@/app/utils/axiosConfig/axiosConfig";
import { useParams } from "next/navigation";
import EditIdHeader from "@/app/components/company/edit/EditIdHeader";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import CvaClsxButton from "@/app/components/CvaClsxButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarBlank, Warning } from "@phosphor-icons/react";
import { clsx } from "clsx";

type Props = {};

const EditId = (props: Props) => {
  const axiosInstance = ConfigureAxiosInstance();
  const params = useParams();

  const schema = z.object({
    name: z.string().min(2).max(50),
    emailCompany: z.string().email(),
    phone: z.string(),
    ein: z.string().nonempty(),
    address: z.string().nonempty(),
    zipCode: z.string(),
    city: z.object({
      value: z.string(),
      label: z.string(),
    }),
    state: z.object({
      value: z.string(),
      label: z.string(),
    }),
    country: z.object({
      value: z.string(),
      label: z.string(),
    }),
    emailMaster: z.string().email(),
    startDate: z.string(),
    endDate: z.string().nullable(),
  });

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (formData: any) => {
    console.log(formData);
  };

  const { isFetching, isError, refetch, data } = useQuery({
    queryKey: ["editId"],
    queryFn: () => {
      return axiosInstance.get(`/company/${params.id}`);
    },
  });

  useEffect(() => {
    if (data?.data) {
      setValue(
        "country",
        {
          value: data?.data.address?.country,
          label: data?.data.address?.country,
        },
        { shouldValidate: true }
      );
    }
    setValue(
      "state",
      {
        value: data?.data.address?.state,
        label: data?.data.address?.state,
      },
      { shouldValidate: true }
    );

    setValue(
      "city",
      {
        value: data?.data.address?.city,
        label: data?.data.address?.city,
      },
      { shouldValidate: true }
    );
  }, [data?.data]);

  const formatEin = (ein: string) => {
    if (ein && ein.length >= 2) {
      return `${ein.slice(0, 2)} ${ein.slice(2)}`;
    }
    return ein;
  };

  console.log(errors);

  return (
    data && (
      <form onSubmit={handleSubmit(onSubmit)}>
        <EditIdHeader />
        <div className="h-full w-full max-w-[500px] mx-auto p-4 ">
          <h1 className="font-semibold text-xl">Company Information</h1>
          <div className="flex justify-center gap-4 items-start py-4 tex text-sm font-semibold text-gray-500">
            <h1 className="basis-[35%] text-right mt-2">
              Company Name <span className="text-red-500">*</span>
            </h1>
            <div className="flex flex-col justify-center gap-2 items-start tex text-sm font-semibold text-gray-500 flex-grow">
              <Controller
                name="name"
                control={control}
                defaultValue={data?.data.name}
                render={({ field }) => (
                  <input
                    {...field}
                    className={clsx(
                      "border rounded flex-grow px-2 py-2 w-full",
                      { "border-red-500": errors.name }
                    )}
                    type="text"
                  />
                )}
              />
              {errors.name && (
                <p className="text-red-500 text-sm flex gap-2 justify-center items-start">
                  <Warning size={14} className="mt-1" />
                  {errors.name.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-center gap-4 items-start py-4 text-sm font-semibold text-gray-500">
            <h1 className="basis-[35%] text-right mt-2">
              Email Address <span className="text-red-500">*</span>
            </h1>
            <div className="flex flex-col justify-center gap-2 items-start tex text-sm font-semibold text-gray-500 flex-grow">
              <Controller
                name="emailCompany"
                control={control}
                defaultValue={data?.data.email}
                render={({ field }) => (
                  <input
                    {...field}
                    className={clsx(
                      "border rounded flex-grow px-2 py-2 w-full",
                      { "border-red-500": errors.name }
                    )}
                    type="text"
                  />
                )}
              />
              {errors.emailCompany && (
                <p className="text-red-500 text-sm flex gap-2 justify-center items-start">
                  <Warning size={14} className="mt-1" />
                  {errors.emailCompany.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-center gap-4 items-start py-4 tex text-sm font-semibold text-gray-500">
            <h1 className="basis-[57%] text-right mt-2">
              Phone Number <span className="text-red-500">*</span>
            </h1>
            <Controller
              name="phone"
              control={control}
              defaultValue={data?.data.phone}
              render={({ field }) => (
                <PhoneInput
                  {...field}
                  onChange={(value) => {
                    setValue("phone", value);
                  }}
                  country={(data?.data.address?.country || "bd").toLowerCase()}
                />
              )}
            />
          </div>
          <div className="flex justify-center gap-4 items-start py-4 tex text-sm font-semibold text-gray-500">
            <h1 className="basis-[35%] text-right mt-2">
              EIN <span className="text-red-500">*</span>
            </h1>
            <div className="flex flex-col justify-center gap-2 items-start tex text-sm font-semibold text-gray-500 flex-grow">
              <Controller
                name="ein"
                control={control}
                defaultValue={formatEin(data?.data.ein)}
                render={({ field }) => (
                  <input
                    {...field}
                    className={clsx(
                      "border rounded flex-grow px-2 py-2 w-full",
                      { "border-red-500": errors.ein }
                    )}
                    type="text"
                  />
                )}
              />
              {errors.ein && (
                <p className="text-red-500 text-sm flex gap-2 justify-center items-start">
                  <Warning size={14} className="mt-1" />
                  {errors.ein.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-center gap-4 items-start py-4 tex text-sm font-semibold text-gray-500">
            <h1 className="basis-[53%] text-right mt-2">
              Address <span className="text-red-500">*</span>
            </h1>
            <div className="flex-grow ">
              <Controller
                name="address"
                control={control}
                defaultValue={data?.data.address?.addressLine}
                render={({ field }) => (
                  <input
                    {...field}
                    className={clsx("border rounded w-full px-2 py-2 mb-2", {
                      "border-red-500": errors.address,
                    })}
                    type="text"
                  />
                )}
              />
              <div className="grid grid-cols-2 gap-2">
                <Controller
                  name="zipCode"
                  control={control}
                  defaultValue={data?.data.address?.zipCode}
                  render={({ field }) => (
                    <input
                      {...field}
                      className="border rounded w-full px-2 py-2"
                      type="text"
                    />
                  )}
                />
                <Controller
                  name="city"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={[]}
                      value={field.value ?? data?.data.address?.city}
                    />
                  )}
                />
                <Controller
                  name="state"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={[]}
                      value={field.value ?? data?.data.address?.state}
                    />
                  )}
                />
                <Controller
                  name="country"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={[]}
                      value={field.value ?? data?.data.address?.country}
                    />
                  )}
                />
              </div>
              {errors.address && (
                <p className="text-red-500 text-sm flex gap-2 justify-center items-start">
                  <Warning size={14} className="mt-1" />
                  {errors.address.message}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="h-full w-full max-w-[500px] mx-auto p-6 ">
          <h1 className="font-semibold text-xl">Master Account</h1>
          <div className="flex justify-center gap-4 items-start py-4 tex text-sm font-semibold text-gray-500">
            <h1 className="basis-[35%] text-right mt-2">
              Email Address <span className="text-red-500">*</span>
            </h1>
            <div className="flex flex-col justify-center gap-2 items-start tex text-sm font-semibold text-gray-500 flex-grow">
              <Controller
                name="emailMaster"
                control={control}
                defaultValue={data?.data.email}
                render={({ field }) => (
                  <input
                    {...field}
                    className={clsx(
                      "border rounded flex-grow px-2 py-2 w-full",
                      { "border-red-500": errors.emailMaster }
                    )}
                    type="text"
                  />
                )}
              />
              {errors.emailMaster && (
                <p className="text-red-500 text-sm flex gap-2 justify-center items-start mt-2">
                  <Warning size={14} className="mt-1" />
                  {errors.emailMaster.message}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="h-full w-full max-w-[500px] mx-auto p-6 ">
          <h1 className="font-semibold text-xl">Billing Information</h1>
          <div className="flex justify-center gap-4 items-start py-4 tex text-sm font-semibold text-gray-500">
            <h1 className="basis-[35%] text-right mt-2">
              Start Month <span className="text-red-500">*</span>
            </h1>
            <div className="flex gap-2 justify-center items-center relative flex-grow">
              <Controller
                name="startDate"
                control={control}
                defaultValue={data?.data.billingInfo?.startDate}
                render={({ field }) => (
                  <DatePicker
                    selected={field.value}
                    onChange={(value) => {
                      setValue("startDate", value.toString());
                    }}
                    className="pl-8 py-1.5 border rounded w-full"
                  />
                )}
              />
              <CalendarBlank
                className="absolute top-2 left-2 cursor-pointer"
                size={20}
              />
            </div>
          </div>
          <div className="flex justify-center gap-4 items-start py-4 tex text-sm font-semibold text-gray-500">
            <h1 className="basis-[35%] text-right mt-2">
              End Month <span className="text-red-500">*</span>
            </h1>
            <div className="flex gap-2 justify-center items-center relative flex-grow">
              <Controller
                name="endDate"
                control={control}
                defaultValue={data?.data.billingInfo?.endDate}
                render={({ field }) => (
                  <DatePicker
                    selected={field.value}
                    onChange={(value) => {
                      setValue("endDate", value.toString());
                    }}
                    className="pl-8 py-1.5 border rounded w-full"
                  />
                )}
              />
              <CalendarBlank
                className="absolute top-2 left-2 cursor-pointer"
                size={20}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center p-8 pt-2 bg-[#F8F9FB]">
          <CvaClsxButton type="submit" intent="secondary" size="large">
            Update
          </CvaClsxButton>
        </div>
      </form>
    )
  );
};

export default EditId;
