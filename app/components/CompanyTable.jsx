"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function CompanyTable() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["tableData"],
    queryFn: async () => {
      const base64Credentials = localStorage.getItem("token");
      try {
        const response = await axios.get(
          "http://192.168.0.168:5000/company/list?page=1&size=10&query=",
          {
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${base64Credentials}`,
            },
          }
        );
        console.log(response.data.data);
        return response.data.data;
      } catch (error) {
        throw new Error("Error fetching data");
      }
    },
  });

  console.log(data);

  return (
    <div className="mt-2">
      <div className="grid grid-cols-6 text-[#455F82] font-semibold text-sm bg-[#F8F9FB] py-3 px-5 border-b-2">
        <h1>COMPANY</h1>
        <h1>PHONE</h1>
        <h1>EMAIl</h1>
        <h1>LOCATION</h1>
        <h1>PRODUCTS</h1>
        <h1>ACTION</h1>
      </div>
      {data?.map((item) => (
        <div key={item.id} className="grid grid-cols-6 py-2 px-5 border-b">
          <div>{item.company}</div>
          <div>{item.phone}</div>
          <div>{item.email}</div>
          <div>{item.location}</div>
          <div>{item.products}</div>
          <div>{/* Render action */}</div>
        </div>
      ))}
    </div>
  );
}

export default CompanyTable;
