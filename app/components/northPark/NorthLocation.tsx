"use client";

import React from "react";
import { ChargingStation } from "@phosphor-icons/react";
import Image from "next/image";
import { clsx } from "clsx";
import { locations } from "@/app/utils/northLocation/northLocation";

type Props = {};

const NorthLocation = (props: Props) => {
  const dummy = [{ location: "A" }];
  const locationNew = locations.chargingChargers.data.hits;
  const location = locations.availableChargers.data.hits;
  let check = location.length;
  if (check % 2 === 0) {
    check = 0;
  } else {
    check = 1;
  }
  console.log(check);

  return (
    <div className="my-1 mx-5 py-4">
      {dummy.map((data) => (
        <>
          <h1 className="text-[#115955] font-sans font-base font-semibold mb-2">
            {`Location ${data.location}`}
          </h1>

          <div className="bg-white py-3 px-12">
            <div className="grid grid-cols-2 gap-8">
              {location.map((items, index) => (
                <div
                  key={items._id}
                  className="py-2 flex flex-col justify-start items-center gap-1"
                >
                  <div className="flex justify-center items-start gap-1 ">
                    <ChargingStation
                      className={clsx("mt-0.5", {
                        "text-[#6BBE00]":
                          items._source.chStatus === "Available",
                      })}
                      size={14}
                      weight="fill"
                    />
                    <h1 className="font-sans font-normal text-sm">
                      {items._source.name}
                    </h1>
                  </div>
                  <div className="w-full  h-full">
                    {items._source.connectors &&
                      items._source.connectors.map((info, idx) => (
                        <React.Fragment key={idx}>
                          <div
                            className={clsx(
                              "border-2 border-dashed flex flex-col justify-end items-start  border-gray-400 min-h-[105px]",
                              {
                                "border-r-0 bg-gradient-to-r from-gray-50 to-white":
                                  (index + 1) % 2 === 0 &&
                                  info.chStatus === "Available",
                                "border-l-0 bg-gradient-to-l from-gray-50 to-white":
                                  (index + 1) % 2 !== 0 &&
                                  info.chStatus === "Available",
                                "border-r-0 bg-gradient-to-r from-blue-50 to-white":
                                  (index + 1) % 2 === 0 &&
                                  info.chStatus === "inUse",
                                "border-l-0 bg-gradient-to-l from-blue-50 to-white":
                                  (index + 1) % 2 !== 0 &&
                                  info.chStatus === "inUse",
                                "border-r-0 bg-gradient-to-r from-red-50 to-white":
                                  (index + 1) % 2 === 0 &&
                                  info.chStatus === "down",
                                "border-l-0 bg-gradient-to-l from-red-50 to-white":
                                  (index + 1) % 2 !== 0 &&
                                  info.chStatus === "down",
                                "border-t-0": idx > 0,
                              }
                            )}
                          >
                            <div className="flex flex-col p-3 gap-2">
                              {info.chStatus === "Available" && (
                                <Image
                                  src={
                                    (index + 1) % 2 === 0
                                      ? "/images/Car Icon Right.png"
                                      : "/images/Car Icon Left.png"
                                  }
                                  alt={
                                    (index + 1) % 2 === 0
                                      ? "Car Icon Right"
                                      : "Car Icon Left"
                                  }
                                  width={132}
                                  height={61}
                                />
                              )}
                              <div className="flex gap-2 justify-start items-center ">
                                <div
                                  className={clsx("w-1 h-1 rounded-full ", {
                                    "bg-[#6BBE00]":
                                      info.chStatus === "Available",
                                    "bg-[#3BA0FF]": info.chStatus === "inUse",
                                    "bg-[#FF2C2C]": info.chStatus === "down",
                                  })}
                                ></div>
                                <h1
                                  className={clsx(
                                    " font-sans font-medium text-xs",
                                    {
                                      "text-[#6BBE00]":
                                        info.chStatus === "Available",
                                      "text-[#3BA0FF]":
                                        info.chStatus === "inUse",
                                      "text-[#FF2C2C]":
                                        info.chStatus === "down",
                                    }
                                  )}
                                >
                                  {info.chStatus === "Available"
                                    ? "Available"
                                    : info.chStatus === "inUse"
                                    ? "In Use"
                                    : "Down"}
                                </h1>
                              </div>
                              {info.chStatus !== "inUse" && (
                                <div className="text-[#667080] flex gap-1 justify-start items-center">
                                  <Image
                                    src="/images/wired.svg"
                                    alt="Wired Logo"
                                    width={10}
                                    height={10}
                                  />
                                  <p className="font-sans text-xs font-medium">
                                    J1772 - 9.9kW max
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        </React.Fragment>
                      ))}
                  </div>
                </div>
              ))}
              {locationNew.map((items, index) => (
                <div
                  key={items._id}
                  className="py-2 flex flex-col justify-start items-center gap-1"
                >
                  <div className="flex justify-center items-start gap-1 ">
                    <ChargingStation
                      className={clsx("mt-0.5", {
                        "text-[#FF2C2C]":
                          items._source.chStatus === "Available",
                      })}
                      size={14}
                      weight="fill"
                    />
                    <h1 className="font-sans font-normal text-sm">
                      {items._source.name}
                    </h1>
                  </div>
                  <div className="w-full  h-full">
                    {items._source.connectors &&
                      items._source.connectors.map((info, idx) => (
                        <React.Fragment key={idx}>
                          <div
                            className={clsx(
                              "border-2 border-dashed flex flex-col justify-end items-start  border-gray-400 min-h-[105px]",
                              {
                                "border-r-0 bg-gradient-to-r from-gray-50 to-white":
                                  (index + check + 1) % 2 === 0 &&
                                  info.chStatus === "Available",
                                "border-l-0 bg-gradient-to-l from-gray-50 to-white":
                                  (index + check + 1) % 2 !== 0 &&
                                  info.chStatus === "Available",
                                "border-r-0 bg-gradient-to-r from-blue-50 to-white":
                                  (index + check + 1) % 2 === 0 &&
                                  info.chStatus === "inUse",
                                "border-l-0 bg-gradient-to-l from-blue-50 to-white":
                                  (index + check + 1) % 2 !== 0 &&
                                  info.chStatus === "inUse",
                                "border-r-0 bg-gradient-to-r from-red-50 to-white":
                                  (index + check + 1) % 2 === 0 &&
                                  info.chStatus === "down",
                                "border-l-0 bg-gradient-to-l from-red-50 to-white":
                                  (index + check + 1) % 2 !== 0 &&
                                  info.chStatus === "down",
                                "border-t-0": idx > 0,
                              }
                            )}
                          >
                            <div className="flex flex-col p-3 gap-2">
                              {info.chStatus === "Available" && (
                                <Image
                                  src={
                                    (index + check + 1) % 2 === 0
                                      ? "/images/Car Icon Right.png"
                                      : "/images/Car Icon Left.png"
                                  }
                                  alt={
                                    (index + check + 1) % 2 === 0
                                      ? "Car Icon Right"
                                      : "Car Icon Left"
                                  }
                                  width={132}
                                  height={61}
                                />
                              )}
                              <div className="flex gap-2 justify-start items-center ">
                                <div
                                  className={clsx("w-1 h-1 rounded-full ", {
                                    "bg-[#6BBE00]": info.chStatus === "down",
                                    "bg-[#3BA0FF]": info.chStatus === "inUse",
                                    "bg-[#FF2C2C]":
                                      info.chStatus === "Available",
                                  })}
                                ></div>
                                <h1
                                  className={clsx(
                                    " font-sans font-medium text-xs",
                                    {
                                      "text-[#6BBE00]":
                                        info.chStatus === "down",
                                      "text-[#3BA0FF]":
                                        info.chStatus === "inUse",
                                      "text-[#FF2C2C]":
                                        info.chStatus === "Available",
                                    }
                                  )}
                                >
                                  Others
                                </h1>
                              </div>
                              {info.chStatus !== "inUse" && (
                                <div className="text-[#667080] flex gap-1 justify-start items-center">
                                  <Image
                                    src="/images/wired.svg"
                                    alt="Wired Logo"
                                    width={10}
                                    height={10}
                                  />
                                  <p className="font-sans text-xs font-medium">
                                    J1772 - 9.9kW max
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        </React.Fragment>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default NorthLocation;
