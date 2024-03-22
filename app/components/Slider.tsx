"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import sliderData from "./../utils/slider/sliderData";
import { usePathname } from "next/navigation";

function Slider() {
  const data = sliderData();
  const currentUrl = usePathname();
  console.log(currentUrl);

  return (
    <>
      <div className="w-fit flex flex-col gap-8 bg-[#FAFBFC] px-6 text-[#757D87] ">
        <Image
          src="/images/Main Logo 1.png"
          alt="Main Logo"
          width={120}
          height={100}
        ></Image>

        <div>
          {data.slice(0, 6).map((data, index) => (
            <Link
              key={index}
              href={data.link}
              className={`flex gap-3 justify-start items-center p-2 transition-all duration-300 hover:bg-[#E8F1FE] hover:text-[#3A83E9] cursor-pointer hover:rounded-md font-semibold w-60 ${
                currentUrl === data.link && "bg-[#E8F1FE] text-[#3A83E9]"
              } `}
            >
              {data.icon}
              <h1 className="text-sm">{data.title}</h1>
            </Link>
          ))}
        </div>

        <div>
          <h1 className="font-semibold text-sm">RESOURCES</h1>
          {data.slice(6).map((data, index) => (
            <Link
              key={index}
              href={data.link}
              className={`flex gap-3 justify-start items-center p-2 transition-all duration-300 hover:bg-[#E8F1FE] hover:text-[#3A83E9] cursor-pointer hover:rounded-md font-semibold w-60w-60 ${
                index === 0 && "mt-2"
              } ${currentUrl === data.link && "bg-[#E8F1FE] text-[#3A83E9]"}`}
            >
              {data.icon}
              <h1 className="text-sm">{data.title}</h1>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Slider;