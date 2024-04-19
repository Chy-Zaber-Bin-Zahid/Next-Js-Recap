"use client";
import React from "react";
import { PieChart, Pie, Cell } from "recharts";

type Props = {};

const ChartPie = (props: Props) => {
  const data = [
    { name: "Connected", value: 439 },
    { name: "Disconnected", value: 392 },
    { name: "Offline", value: 43 },
    { name: "Down", value: 10 },
  ];
  const COLORS = ["#51C02F", "#7A27F1", "#FBBA3B", "#FF3636"];
  return (
    <div className="flex flex-col justify-center items-center  ">
      <h1 className="text-green-700 font-semibold w-96 text-xl">
        Charger Status
      </h1>
      <div className="flex justify-center gap-2 items-center">
        <PieChart width={220} height={220}>
          <Pie
            data={data}
            cx={120}
            cy={105}
            innerRadius={40}
            outerRadius={65}
            fill="#8884d8"
            paddingAngle={1}
            dataKey="value"
            startAngle={450}
            endAngle={90}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <div className="flex flex-col gap-2 justify-center items-start">
          <div className="flex gap-2 justify-center items-center">
            <div className={`w-4 h-4 bg-[#51C02F] rounded-full`}></div>
            <h1>
              {data[0].name} ({data[0].value})
            </h1>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <div className={`w-4 h-4 bg-[#7A27F1] rounded-full`}></div>
            <h1>
              {data[1].name} ({data[1].value})
            </h1>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <div className={`w-4 h-4 bg-[#FBBA3B] rounded-full`}></div>
            <h1>
              {data[2].name} ({data[2].value})
            </h1>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <div className={`w-4 h-4 bg-[#FF3636] rounded-full`}></div>
            <h1>
              {data[3].name} ({data[3].value})
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartPie;
