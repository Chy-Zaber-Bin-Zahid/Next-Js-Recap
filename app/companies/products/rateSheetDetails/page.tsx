import DetailsHeader from "@/app/components/productsRateSheetDetails/DetailsHeader";
import DetailsInformation from "@/app/components/productsRateSheetDetails/DetailsInformation";
import DetailsTable from "@/app/components/productsRateSheetDetails/DetailsTable";

export default function RateSheetDetails() {
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
