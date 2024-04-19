import React from "react";
import ChartPie from "../components/chart/ChartPie";
import ChartBar from "../components/chart/ChartBar";

type Props = {};

const Chart = (props: Props) => {
  return (
    <div className="flex flex-col justify-center gap-10 items-center h-screen">
      <ChartPie />
      <ChartBar />
    </div>
  );
};

export default Chart;
