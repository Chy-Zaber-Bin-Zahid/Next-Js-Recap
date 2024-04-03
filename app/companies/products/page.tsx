"use client";

import CvaClsxButton from "@/app/components/CvaClsxButton";
import { usePathname, useRouter } from "next/navigation";

export default function Products() {
  const router = useRouter();
  const currentPath = usePathname();

  const handleDetails = (param) => {
    if (param === "rate") {
      router.push(`${currentPath}/rateSheetDetails`);
    } else if (param === "create") {
      router.push(`${currentPath}/create`);
    } else {
      router.push(`${currentPath}/details`);
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <CvaClsxButton
        onClick={() => {
          handleDetails("rate");
        }}
        intent="secondary"
        size="large"
      >
        Rate Sheet Details Page
      </CvaClsxButton>
      <CvaClsxButton
        onClick={() => {
          handleDetails("details");
        }}
        intent="secondary"
        size="large"
      >
        Details Page
      </CvaClsxButton>
      <CvaClsxButton
        onClick={() => {
          handleDetails("create");
        }}
        intent="secondary"
        size="large"
      >
        Create Page
      </CvaClsxButton>
    </div>
  );
}
