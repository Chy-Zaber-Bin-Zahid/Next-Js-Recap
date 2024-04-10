"use client";

import React, { useState } from "react";
import ChargerSelectPlug from "./ChargerSelectPlug";
import CvaClsxButton from "@/app/components/CvaClsxButton";
import { clsx } from "clsx";

type Props = {};

const ChargerPlug = (props: Props) => {
  const [selected, setSelected] = useState<number>(0);
  const items = [
    { id: 1, isUse: false, plug: "Plug- 1" },
    { id: 2, isUse: true, plug: "Plug- 2" },
    { id: 3, isUse: false, plug: "Plug- 3" },
    { id: 4, isUse: false, plug: "Plug- 4" },
  ];

  const handleDivClick = (id: number, isUse: boolean) => {
    if (!isUse) {
      setSelected(id);
    }
  };

  return (
    <div className="px-6 py-8">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl helvetica-font font-bold">Select Plug</h1>
        {items.map((data) => (
          <div
            key={data.id}
            onClick={() => handleDivClick(data.id, data.isUse)}
            className={clsx("border border-[#D9D9D9] rounded-md p-3 ", {
              "bg-white cursor-pointer": !data.isUse,
              "bg-[#F1F1F1] cursor-not-allowed": data.isUse,
            })}
          >
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 justify-between items-center">
                <div className="flex gap-3 justify-center items-center">
                  <h1 className="font-sans font-bold text-lg">{data.plug}</h1>
                  <div
                    className={clsx("flex gap-2 justify-center items-center ", {
                      "text-[#6BBE00]": !data.isUse,
                      "text-[#FF2C2C]": data.isUse,
                    })}
                  >
                    <div className="w-[1px] h-[9px] bg-[#D9D9D9] rounded"></div>
                    <p className="text-xs uppercase font-semibold">
                      {data.isUse ? "Is Use" : "Available"}
                    </p>
                    <div
                      className={clsx("w-1.5 h-1.5 rounded-full  ", {
                        "bg-[#6BBE00]": !data.isUse,
                        "bg-[#FF2C2C]": data.isUse,
                      })}
                    ></div>
                  </div>
                </div>
                <input
                  checked={selected === data.id && true}
                  type="radio"
                  className="w-4 h-4 accent-[#115955] cursor-pointer"
                  disabled={data.isUse}
                />
              </div>
              <div className="flex gap-2 justify-start items-center flex-wrap text-xs">
                <div
                  className={clsx(
                    "border border-[#D9D9D9] rounded-full px-2 py-1  font-normal",
                    {
                      "bg-[#115955]": !data.isUse,
                      "bg-[#939393]": data.isUse,
                    }
                  )}
                >
                  <h1 className=" text-white font-sans">J1172</h1>
                </div>
                <div className="border border-[#D9D9D9] rounded-full px-2 py-1 font-normal">
                  <h1 className=" text-black font-sans">
                    $1.25 to initiate session
                  </h1>
                </div>
                <div className="border border-[#D9D9D9] rounded-full px-2 py-1 font-normal">
                  <h1 className=" text-black font-sans">$0.30/ kW</h1>
                </div>
                <div className="border border-[#D9D9D9] rounded-full px-2 py-1 font-normal">
                  <h1 className=" text-black font-sans">
                    Idle Fee: $0.15/min after 10 min
                  </h1>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* plug 2 */}
        {/* <div
          onClick={handleDivClick}
          className={clsx(
            "border border-[#D9D9D9] rounded-md p-3 cursor-pointer",
            {
              "bg-white": !isUse,
              "bg-[#F1F1F1]": isUse,
            }
          )}
        >
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 justify-between items-center">
              <div className="flex gap-3 justify-center items-center">
                <h1 className="font-sans font-bold text-lg">Plug- 2</h1>
                <div
                  className={clsx("flex gap-2 justify-center items-center ", {
                    "text-[#6BBE00]": !isUse,
                    "text-[#FF2C2C]": isUse,
                  })}
                >
                  <div className="w-[1px] h-[9px] bg-[#D9D9D9] rounded"></div>
                  <p className="text-xs uppercase font-semibold">
                    {" "}
                    {isUse ? "Is Use" : "Available"}
                  </p>
                  <div
                    className={clsx("w-1.5 h-1.5 rounded-full  ", {
                      "bg-[#6BBE00]": !isUse,
                      "bg-[#FF2C2C]": isUse,
                    })}
                  ></div>
                </div>
              </div>
              <input
                type="radio"
                className="w-4 h-4 accent-[#115955] cursor-pointer"
                disabled={isUse && selected}
              />
            </div>
            <div className="flex gap-2 justify-start items-center flex-wrap text-xs">
              <div
                className={clsx(
                  "border border-[#D9D9D9] rounded-full px-2 py-1  font-normal",
                  {
                    "bg-[#115955]": !isUse,
                    "bg-[#939393]": isUse,
                  }
                )}
              >
                <h1 className=" text-white font-sans">J1172</h1>
              </div>
              <div className="border border-[#D9D9D9] rounded-full px-2 py-1 font-normal">
                <h1 className=" text-black font-sans">
                  $1.25 to initiate session
                </h1>
              </div>
              <div className="border border-[#D9D9D9] rounded-full px-2 py-1 font-normal">
                <h1 className=" text-black font-sans">$0.30/ kW</h1>
              </div>
              <div className="border border-[#D9D9D9] rounded-full px-2 py-1 font-normal">
                <h1 className=" text-black font-sans">
                  Idle Fee: $0.15/min after 10 min
                </h1>
              </div>
            </div>
          </div>
        </div> */}
        <ChargerSelectPlug />
        <CvaClsxButton onClick={()=> console.log(selected)} className="uppercase" intent="charge" size="charge">
          Confirm
        </CvaClsxButton>
      </div>
    </div>
  );
};

export default ChargerPlug;
