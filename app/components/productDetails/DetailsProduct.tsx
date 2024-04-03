"use client";
import React from "react";
import CvaClsxButton from "../CvaClsxButton";
import { PencilSimpleLine } from "@phosphor-icons/react";

type Props = {};

const DetailsProduct = (props: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center gap-2">
        <h1 className="font-semibold text-xl">Product Details</h1>
        <CvaClsxButton
          intent="white"
          size="medium"
          className="flex justify-center items-center gap-2 text-sm"
        >
          <PencilSimpleLine size={16} />
          Edit
        </CvaClsxButton>
      </div>
      <div className="grid grid-cols-5 gap-y-4 text-sm">
        <div className="text-[#9DA3AB] flex justify-between items-center mr-2">
          <h1>Name</h1>
          <span>:</span>
        </div>
        <p className="col-span-4">Smart Solution</p>
        <div className="text-[#9DA3AB] flex justify-between items-center mr-2 h-fit ">
          <h1 >Description</h1>
          <span>:</span>
        </div>

        <p className="col-span-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          blanditiis, quis nesciunt tenetur qui minima ipsam suscipit
          reprehenderit consequatur voluptas itaque perspiciatis autem corporis
          repellat aperiam vitae voluptate! Non odit repellat quam magnam, sit
          maxime exercitationem nulla enim porro voluptates ipsa deleniti
          possimus ut ducimus explicabo dolor, unde velit expedita.
        </p>
      </div>
    </div>
  );
};

export default DetailsProduct;
