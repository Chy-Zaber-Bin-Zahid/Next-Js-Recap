"use client";
import React, { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import ConfigureAxiosInstance from "@/app/utils/axiosConfig/axiosConfig";
import { useInView } from "react-intersection-observer";
import { Spinner } from "@phosphor-icons/react";

export default function InfinityScroll() {
  const axiosInstance = ConfigureAxiosInstance();

  const { ref, inView } = useInView();

  const fetchData = async ({ pageParam }) => {
    const res = await axiosInstance.get(
      `/company/list?page=${pageParam}&size=10&query=`
    );
    return res;
  };

  const { isFetchingNextPage, fetchNextPage, hasNextPage, data } =
    useInfiniteQuery({
      queryKey: ["infiniteScroll"],
      queryFn: fetchData,
      getNextPageParam: (lastPage, pages) => {
        return pages.length + 1;
      },
      initialPageParam: 1,
    });

  useEffect(() => {
    if (inView && hasNextPage) {
      // console.log(inView);
      if (data?.pages && data.pages.length * 10 < data.pages[0].data.count) {
        fetchNextPage();
      }
    }
  }, [inView, hasNextPage]);

  console.log(data);

  return (
    <div className="flex flex-col gap-4 justify-center items-center p-4 relative">
      {data?.pages.map((page: any, index: number) => (
        <div className="flex flex-col gap-4" key={index}>
          {page.data.data.map((data: any, idx: number) => (
            <div
              ref={idx === page.data.data.length - 1 ? ref : undefined}
              className="bg-gray-200 rounded-md p-4 w-80"
              key={idx}
            >
              <h1>Name: {data.name}</h1>
              <h1>Phone: {data.phone}</h1>
            </div>
          ))}
        </div>
      ))}
      {isFetchingNextPage && <Spinner className="animate-spin" size={32} />}
      <div className="fixed bottom-2 right-2 font-semibold">
        <h1>
          Total Data:{" "}
          {data?.pages.reduce(
            (acc: number, page: any) => acc + page.data.data.length,
            0
          )}
        </h1>
      </div>
    </div>
  );
}
