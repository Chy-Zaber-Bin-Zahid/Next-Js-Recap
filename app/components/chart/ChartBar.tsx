"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { barData } from "./BarData";

type Props = {};

const formattedData = barData.data.map((item: any) => {
  const fromDate = new Date(item.from_as_string);
  const formattedDate = fromDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
  return {
    date: formattedDate,
    yNumber: item.doc_count,
    totalRevenue: item.totalRevenue.value,
    totalEnergyConsumed: item.totalEnergyConsumed.value,
    totalStripeFee: item.totalStripeFee.value,
  };
});

const ChartBar = (props: Props) => {
  return (
    <ResponsiveContainer width="95%" height="95%">
      <BarChart
        width={500}
        height={300}
        data={formattedData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid horizontal={true} vertical={false} />
        <XAxis dataKey="date" />
        <YAxis axisLine={false} dataKey="totalStripeFee" />
        <Tooltip />
        <Bar dataKey="totalStripeFee" fill="#0D615E" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ChartBar;
