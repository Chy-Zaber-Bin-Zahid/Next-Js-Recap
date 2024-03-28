"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import sliderData from "./../utils/slider/sliderData";
import { usePathname, useRouter } from "next/navigation";
import CvaClsxButton from "./CvaClsxButton";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/loggingSlice";
import { Spinner } from "@phosphor-icons/react";

function Slider() {
  const [isPending, setIsPending] = useState(false);
  const data = sliderData();
  const currentUrl = usePathname();
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.logging.data);

  const handleLogout = () => {
    setIsPending(true);
    localStorage.removeItem("token");
    dispatch(logOut());
  };

  useEffect(() => {
    if (user === null) {
      router.push("/login");
    }
    setIsPending(false);
    console.log(user);
  }, [user]);

  return (
    <>
      <div className="w-fit flex flex-col gap-7 bg-[#FAFBFC] p-6  h-full text-[#757D87]">
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
                currentUrl ===
                  (data.link.includes("?")
                    ? data.link.split("/?")[0]
                    : data.link) && "bg-[#E8F1FE] text-[#3A83E9]"
              }`}
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

        <CvaClsxButton
          className="flex justify-center items-center gap-2"
          onClick={handleLogout}
          intent="primary"
          size="large"
        >
          {isPending ? (
            <>
              Loading <Spinner className="animate-spin" size={20} />
            </>
          ) : (
            "Logout"
          )}
        </CvaClsxButton>
      </div>
    </>
  );
}

export default Slider;
