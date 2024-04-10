import React from "react";

type Props = {};

const EditIdHeader = (props: Props) => {
  return (
    <div className="p-6 bg-[#F8F9FB]">
      <h1 className="text-2xl font-semibold">Edit Company</h1>
      <p className="text-sm text-[#757D87]">
        Update and customize company profile information.
      </p>
    </div>
  );
};

export default EditIdHeader;
