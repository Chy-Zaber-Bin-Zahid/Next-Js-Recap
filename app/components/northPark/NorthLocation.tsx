"use client";

import React from "react";
import { ChargingStation } from "@phosphor-icons/react";
import Image from "next/image";
import { clsx } from "clsx";

type Props = {};

const NorthLocation = (props: Props) => {
  const locations = [
    {
      id: "1a",
      locationName: "Location 2",
      chargers: [
        {
          id: "1a1",
          chargerName: "Test plug type and rate charger 001",
          plugs: [{ id: "1a1a", availability: "available" }],
        },
        {
          id: "1a2",
          chargerName: "Test plug type and rate charger 002",
          plugs: [{ id: "1a2b", availability: "inUse" }],
        },
        {
          id: "1a3",
          chargerName: "Test plug type and rate charger 003",
          plugs: [
            { id: "1a1a", availability: "available" },
            { id: "1a3a", availability: "inUse" },
          ],
        },
        {
          id: "1a4",
          chargerName: "Test plug type and rate charger 004",
          plugs: [
            { id: "1a4b", availability: "available" },
            { id: "1a3a", availability: "inUse" },
          ],
        },
        {
          id: "1a5",
          chargerName: "Test plug type and rate charger 005",
          plugs: [{ id: "1a2b", availability: "available" }],
        },
        {
          id: "1a6",
          chargerName: "Test plug type and rate charger 006",
          plugs: [{ id: "1a2b", availability: "down" }],
        },
        {
          id: "1a7",
          chargerName: "Test plug type and rate charger 007",
          plugs: [
            { id: "1a1a", availability: "available" },
            { id: "1a3a", availability: "inUse" },
          ],
        },
        {
          id: "1a8",
          chargerName: "Test plug type and rate charger 008",
          plugs: [
            { id: "1a4b", availability: "available" },
            { id: "1a3a", availability: "inUse" },
          ],
        },
      ],
    },
    {
      id: "2b",
      locationName: "Location 4",
      chargers: [
        {
          id: "2b1",
          chargerName: "Test plug type and rate charger 001",
          plugs: [{ id: "2b1b", availability: "down" }],
        },
        {
          id: "2b2",
          chargerName: "Test plug type and rate charger 002",
          plugs: [{ id: "2b2c", availability: "available" }],
        },
        {
          id: "2b3",
          chargerName: "Test plug type and rate charger 003",
          plugs: [{ id: "2b3a", availability: "inUse" }],
        },
        {
          id: "1a8",
          chargerName: "Test plug type and rate charger 004",
          plugs: [
            { id: "1a4b", availability: "available" },
            { id: "1a3a", availability: "inUse" },
          ],
        },
        {
          id: "2b3",
          chargerName: "Test plug type and rate charger 005",
          plugs: [{ id: "2b3a", availability: "inUse" }],
        },
      ],
    },
    {
      id: "3c",
      locationName: "Location 6",
      chargers: [
        {
          id: "3c1",
          chargerName: "Test plug type and rate charger 001",
          plugs: [{ id: "3c1a", availability: "available" }],
        },
        {
          id: "3c2",
          chargerName: "Test plug type and rate charger 002",
          plugs: [{ id: "3c2a", availability: "available" }],
        },
        {
          id: "3c3",
          chargerName: "Test plug type and rate charger 003",
          plugs: [{ id: "3c3b", availability: "down" }],
        },
        {
          id: "3c4",
          chargerName: "Test plug type and rate charger 004",
          plugs: [{ id: "3c3c", availability: "down" }],
        },
      ],
    },
  ];

  return (
    <div className="my-1 mx-5 py-4">
      {locations.map((data) => (
        <>
          <h1 className="text-[#115955] font-sans font-base font-semibold mb-2">
            {data.locationName}
          </h1>

          <div className="bg-white py-3 px-12">
            <div className="grid grid-cols-2 gap-y-8">
              {data.chargers.map((items, index) => (
                <div
                  key={items.id}
                  className={clsx(
                    "py-2 flex flex-col justify-start items-center gap-1",
                    {
                      "row-span-2":
                        items.plugs.some(
                          (plug) => plug.availability === "available"
                        ) &&
                        items.plugs.some(
                          (plug) => plug.availability === "inUse"
                        ) &&
                        data.chargers.length % 2 !== 0,
                    }
                  )}
                >
                  <div className="flex justify-center items-start gap-1 ">
                    <ChargingStation
                      className={clsx(" mt-1", {
                        "text-[#6BBE00]": items.plugs.some(
                          (plug) => plug.availability === "available"
                        ),
                        "text-[#FF2C2C]": items.plugs.some(
                          (plug) => plug.availability === "down"
                        ),
                        "text-[#3BA0FF]": items.plugs.some(
                          (plug) =>
                            plug.availability !== "available" &&
                            plug.availability === "inUse"
                        ),
                      })}
                      size={14}
                      weight="fill"
                    />
                    <h1 className="font-sans font-normal text-sm">
                      {items.chargerName}
                    </h1>
                  </div>
                  <div className="w-full max-w-[164px] mx-auto h-full">
                    {items.plugs.map((info, idx) => (
                      <React.Fragment key={idx}>
                        {info.availability === "available" && (
                          <div
                            className={clsx(
                              "border-2 border-dashed flex flex-col justify-end items-start  border-gray-400 h-[105px]",
                              {
                                "border-r-0 bg-gradient-to-r from-gray-50 to-white":
                                  (index + 1) % 2 === 0,
                                "border-l-0 bg-gradient-to-l from-gray-50 to-white":
                                  (index + 1) % 2 !== 0,
                                "border-b-0": items.plugs.some(
                                  (plug) => plug.availability === "inUse"
                                ),
                                "h-[151px]":
                                  items.plugs.some(
                                    (plug) => plug.availability === "available"
                                  ) &&
                                  items.plugs.some(
                                    (plug) => plug.availability === "inUse"
                                  ) &&
                                  data.chargers.length % 2 !== 0,
                              }
                            )}
                          >
                            <div className="flex flex-col p-3 ">
                              <div className="flex gap-1 justify-start items-center ">
                                <div className="w-1 h-1 rounded-full bg-[#6BBE00]"></div>
                                <h1 className="text-[#6BBE00] font-sans font-medium text-xs">
                                  Available
                                </h1>
                              </div>
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
                            </div>
                          </div>
                        )}

                        {info.availability === "inUse" && (
                          <div
                            className={clsx(
                              "border-2 border-dashed flex flex-col justify-end items-start  border-gray-400 h-[105px]",
                              {
                                "border-r-0 bg-gradient-to-r from-blue-50 to-white":
                                  (index + 1) % 2 === 0,
                                "border-l-0 bg-gradient-to-l from-blue-50 to-white":
                                  (index + 1) % 2 !== 0,
                                "h-[151px]":
                                  items.plugs.some(
                                    (plug) => plug.availability === "available"
                                  ) &&
                                  items.plugs.some(
                                    (plug) => plug.availability === "inUse"
                                  ) &&
                                  data.chargers.length % 2 !== 0,
                              }
                            )}
                          >
                            <div className="flex flex-col p-3">
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
                              <div className="flex gap-1 justify-start items-center">
                                <div className="w-1 h-1 rounded-full bg-[#3BA0FF]"></div>
                                <h1 className="text-[#3BA0FF] font-sans font-medium text-xs">
                                  In Use
                                </h1>
                              </div>
                            </div>
                          </div>
                        )}
                        {info.availability === "down" && (
                          <div
                            className={clsx(
                              "border-2 border-dashed flex flex-col justify-end items-start  border-gray-400 h-[105px]",
                              {
                                "border-r-0 bg-gradient-to-r from-red-50 to-white":
                                  (index + 1) % 2 === 0,
                                "border-l-0 bg-gradient-to-l from-red-50 to-white":
                                  (index + 1) % 2 !== 0,
                                "border-b-0": items.plugs.some(
                                  (plug) => plug.availability === "inUse"
                                ),
                              }
                            )}
                          >
                            <div className="flex flex-col p-3 ">
                              <div className="flex gap-1 justify-start items-center ">
                                <div className="w-1 h-1 rounded-full bg-[#FF2C2C]"></div>
                                <h1 className="text-[#FF2C2C] font-sans font-medium text-xs">
                                  Down
                                </h1>
                              </div>
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
                            </div>
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ))}
      {/* <h1 className="text-[#115955] font-sans font-base font-semibold mb-2">
        Location 2
      </h1>
      <div className="bg-white py-3 px-12">
        <div className="grid grid-cols-2 gap-x-8">
          <div className="py-2 flex flex-col justify-center items-center gap-1">
            <div className="flex justify-center items-start gap-1">
              <ChargingStation
                className="text-[#6BBE00] mt-1"
                size={14}
                weight="fill"
              />
              <h1 className="font-sans font-normal text-sm">
                Test Plug Type And Rate Charger 002
              </h1>
            </div>
            <div className="w-full max-w-[164px] mx-auto">
              <div className="border-2 border-dashed border-l-0 flex flex-col justify-start items-start  border-gray-500">
                <div className="flex flex-col p-3">
                  <div className="flex gap-1 justify-start items-center">
                    <div className="w-1 h-1 rounded-full bg-[#6BBE00]"></div>
                    <h1 className="text-[#6BBE00] font-sans font-medium text-xs">
                      Available
                    </h1>
                  </div>
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
                </div>
              </div>
              <div className="border-2 border-dashed border-l-0 flex flex-col justify-start items-start  border-gray-500">
                <div className="flex flex-col p-3">
                  <Image
                    src="/images/Car Icon.png"
                    alt="Car Icon"
                    width={132}
                    height={61}
                  />
                  <div className="flex gap-1 justify-start items-center">
                    <div className="w-1 h-1 rounded-full bg-[#6BBE00]"></div>
                    <h1 className="text-[#6BBE00] font-sans font-medium text-xs">
                      In Use
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default NorthLocation;
