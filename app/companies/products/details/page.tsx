import DetailsHeader from "@/app/components/productsDetails/DetailsHeader";
import DetailsInformation from "@/app/components/productsDetails/DetailsInformation";
import DetailsTable from "@/app/components/productsDetails/DetailsTable";

export default function Details() {
  return (
    <div className="h-screen">
      <DetailsHeader />
      <div className="w-[85%] mx-auto">
        <div className="flex flex-col gap-4">
          <DetailsInformation />
          <DetailsTable />
        </div>
      </div>
    </div>
  );
}
