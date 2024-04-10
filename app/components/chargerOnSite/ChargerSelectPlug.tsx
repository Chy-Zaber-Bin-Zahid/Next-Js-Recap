"use client";
import React from "react";
import { Warning } from "@phosphor-icons/react";

type Props = {};

const ChargerSelectPlug = (props: Props) => {
  return (
    <div className="my-1 p-2 border border-[#91D5FF] bg-[#E6F7FF] rounded-md">
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-start items-center gap-2.5">
          <Warning weight="fill" className=" text-[#1890FF]" size={25} />
          <h1 className="font-semibold text-base">Select a Plug</h1>
        </div>
        <p className="font-sans font-normal text-sm">
          Tell us which plug you are connecting to your vehicle.
        </p>
      </div>
    </div>
  );
};

export default ChargerSelectPlug;
