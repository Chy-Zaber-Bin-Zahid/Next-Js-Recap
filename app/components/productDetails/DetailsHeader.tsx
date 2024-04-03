import React from "react";

type Props = {};

const DetailsHeader = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-start p-4 pl-6  ">
      <div className="flex justify-between items-center gap-2  w-full ">
        <h1 className="text-sm text-[#757D87] font-semibold ">
          Products {">"}{" "}
          <span className="text-[#3A83E9]">Details</span>
        </h1>
        <h1 className="text-sm rounded-full text-[#757D87] bg-[#F4F4F5] p-2 font-semibold">
          EM
        </h1>
      </div>
      <h1 className="font-semibold text-2xl mb-5">Smart Solutions Details</h1>
    </div>
  );
};

export default DetailsHeader;
