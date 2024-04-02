"use client";

import CvaClsxButton from "@/app/components/CvaClsxButton";
import { usePathname, useRouter } from "next/navigation";

export default function Products() {
  const router = useRouter();
  const currentPath = usePathname()

  const handleDetails = () => {
    router.push(`${currentPath}/details`);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <CvaClsxButton
        onClick={() => {
          handleDetails();
        }}
        intent="secondary"
        size="large"
      >
        Details Page
      </CvaClsxButton>
    </div>
  );
}
