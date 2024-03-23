"use client";
import React from "react";

function CompanySkeleton() {
  const headerSkeletonNumber = new Array(10).fill(0);
  const bodySkeletonNumber = new Array(60).fill(0);

  return (
    <div className="mt-2">
      <div className="grid grid-cols-6 gap-4 py-3 px-5 bg-[#F8F9FB] border-b-2">
        {headerSkeletonNumber.slice(0, 6).map((val, index) => (
          <div
            key={index}
            className="bg-gray-300 animate-pulse rounded-md h-[1rem] w-[65%]"
          ></div>
        ))}
      </div>

      <div className="grid grid-cols-6 py-3 px-5 border-b gap-4">
        {bodySkeletonNumber.slice(0, 60).map((val, index) => (
          <>
            <div
              key={index}
              className={`bg-gray-300 animate-pulse rounded-md h-[1rem] ${
                Math.floor(index / 6) % 2 === 0 ? "w-[100%]" : "w-[70%]"
              }`}
            ></div>
           
          </>
        ))}
      </div>
    </div>
  );
}

export default CompanySkeleton;
