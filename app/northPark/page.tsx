import React from "react";
import NorthParkHeader from "../components/northPark/NorthParkHeader";
import NorthLocation from './../components/northPark/NorthLocation';

type Props = {};

const NorthPark = (props: Props) => {
  return (
    <div className="bg-[#F9F9F9]">
      <NorthParkHeader />
      <NorthLocation />
    </div>
  );
};

export default NorthPark;
