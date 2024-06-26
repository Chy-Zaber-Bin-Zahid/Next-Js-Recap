"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { PlusCircle, MagnifyingGlass, X, User } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import CompanySkeleton from "./CompanySkeleton";
import CvaClsxButton from "./../CvaClsxButton";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import ConfigureAxiosInstance from "@/app/utils/axiosConfig/axiosConfig";

function CompanyHeader() {
  const { register, handleSubmit } = useForm();

  const searchParams = useSearchParams();
  const size = searchParams.get("size");
  const currentPath = usePathname();
  const axiosInstance = ConfigureAxiosInstance();

  const router = useRouter();

  const [currentPage, setCurrentPage] = useState<number>(
    Math.abs(Number(searchParams.get("page"))) ?? 1
  );
  const [inputState, setInputState] = useState<string>(
    searchParams.get("query") ?? ""
  );
  // const base64Credentials = localStorage.getItem("token");
  const { isFetching, isError, refetch, data } = useQuery({
    queryKey: ["tableData"],
    queryFn: () => {
      return axiosInstance.get(
        `/company/list?page=${currentPage}&size=${size}&query=${inputState}`
      );
    },
  });

  const totalPages = Math.ceil((data?.data?.count || 0) / Number(size));

  useEffect(() => {
    router.push(
      `${currentPath}?page=${currentPage}&size=${size}&query=${inputState}`
    );
    refetch();
  }, [currentPage, inputState]);

  const onSubmit = (data: any) => {
    setInputState(data.searchTerm);
    setCurrentPage(1);
  };

  const handleEditRoute = (idx) => {
    router.push(`${currentPath}/edit/${data?.data.data[idx]._id}`);
  };

  return (
    <>
      <div className="flex flex-col p-6">
        <div className="flex justify-between">
          <h1 className="text-sm text-[#3A83E9] font-semibold">Companies</h1>
          <h1 className="text-sm rounded-full text-[#757D87] bg-[#F4F4F5] p-2 font-semibold">
            EM
          </h1>
        </div>
        <h1 className="text-2xl font-semibold mb-4">All Companies</h1>
        <div className="flex gap-4 justify-between items-center ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative flex-1 h-[40px]"
          >
            <input
              className="flex-1 border-b-2 pl-10 pr-28 w-full outline-none h-full"
              type="text"
              placeholder="Search by name, phone, email, location"
              {...register("searchTerm")}
            />
            <MagnifyingGlass
              className="absolute top-3 left-2 cursor-pointer"
              size={16}
            />
            <X size={16} className="absolute right-20 top-3 cursor-pointer" />
            <CvaClsxButton
              intent="secondary"
              size="small"
              type="submit"
              className="flex gap-2 justify-center items-center w-fit absolute right-2 top-1.5"
            >
              Search
            </CvaClsxButton>
          </form>
          <CvaClsxButton
            intent="secondary"
            size="small"
            className="flex gap-2 justify-center items-center w-fit"
          >
            <PlusCircle size={32} /> Add company
          </CvaClsxButton>
        </div>
      </div>
      <div className="mt-2 h-[400px] overflow-y-auto">
        {isFetching ? (
          <CompanySkeleton />
        ) : (
          <>
            <div className="grid grid-cols-6 gap-x-2 text-[#455F82] font-semibold text-sm bg-[#F8F9FB] py-3 px-5 border-b-2">
              <h1>COMPANY</h1>
              <h1>PHONE</h1>
              <h1>EMAIl</h1>
              <h1>LOCATION</h1>
              <h1>PRODUCTS</h1>
              <h1>ACTION</h1>
            </div>
            {data &&
              data.data.data.map((items: any, idx: number) => (
                <div
                  key={idx}
                  className="grid grid-cols-6 gap-x-2 py-3 px-5 border-b text-sm text-[#757D87] font-semibold "
                >
                  <div>{items.name}</div>
                  <div>{items.phone}</div>
                  <div className="overflow-hidden">
                    <div className="truncate">{items.email}</div>
                  </div>
                  <div>
                    {items.addresses.state}, {items.addresses.country}
                  </div>
                  <div className="flex gap-2 justify-start items-center">
                    <User size={18} /> 1
                  </div>
                  <CvaClsxButton
                    intent="transparent"
                    size="transparent"
                    className="w-fit text-gray-500"
                    onClick={() => handleEditRoute(idx)}
                  >
                    Edit
                  </CvaClsxButton>
                </div>
              ))}
          </>
        )}
      </div>

      <div className="flex justify-between pt-5 text-gray-500">
        <span>
          Showing{" "}
          {data && data.data?.data?.length < 10
            ? (currentPage - 1) * 10 + data.data?.data.length
            : currentPage * 10}{" "}
          of {data ? data.data?.count : "0"}
        </span>

        <div className="border flex">
          <button
            className="px-2"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            {"<"}
          </button>

          {currentPage <= 3 && (
            <>
              {Array.from({ length: Math.min(totalPages, 4) }, (_, index) => (
                <button
                  key={index}
                  className={
                    currentPage === index + 1
                      ? "bg-[#3A83E9] text-white px-2"
                      : "px-2"
                  }
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              <span>...</span>
              {totalPages > 4 && (
                <button
                  key="last"
                  className={
                    currentPage === totalPages
                      ? "bg-[#3A83E9] text-white px-2"
                      : "px-2"
                  }
                  onClick={() => setCurrentPage(totalPages)}
                >
                  {totalPages}
                </button>
              )}
            </>
          )}

          {currentPage >= totalPages - 2 && currentPage <= totalPages && (
            <>
              <button
                key={1}
                className={
                  currentPage === 1 ? "bg-[#3A83E9] text-white px-2" : "px-2"
                }
                onClick={() => setCurrentPage(1)}
              >
                1
              </button>

              <span>...</span>

              {Array.from({ length: Math.min(totalPages, 4) }, (_, index) => (
                <button
                  key={index + 2}
                  className={
                    currentPage === totalPages - 3 + index
                      ? "bg-[#3A83E9] text-white px-2"
                      : "px-2"
                  }
                  onClick={() => setCurrentPage(totalPages - 3 + index)}
                >
                  {totalPages - 3 + index}
                </button>
              ))}
            </>
          )}

          {currentPage > 3 && currentPage < totalPages - 2 && (
            <>
              <button
                key={1}
                className={
                  currentPage === 1 ? "bg-[#3A83E9] text-white px-2" : "px-2"
                }
                onClick={() => setCurrentPage(1)}
              >
                1
              </button>
              <span>...</span>
              {Array.from({ length: 3 }, (_, index) => (
                <button
                  key={index + 2}
                  className={
                    currentPage === currentPage - 1 + index
                      ? "bg-[#3A83E9] text-white px-2"
                      : "px-2"
                  }
                  onClick={() => setCurrentPage(currentPage - 1 + index)}
                >
                  {currentPage - 1 + index}
                </button>
              ))}

              <span>...</span>
              <button
                key={totalPages}
                className={
                  currentPage === totalPages
                    ? "bg-[#3A83E9] text-white px-2"
                    : "px-2"
                }
                onClick={() => setCurrentPage(totalPages)}
              >
                {totalPages}
              </button>
            </>
          )}

          <button
            disabled={currentPage === Math.ceil(data?.data.count! / 10)}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-2"
          >
            {">"}
          </button>
        </div>
      </div>
    </>
  );
}

export default CompanyHeader;
