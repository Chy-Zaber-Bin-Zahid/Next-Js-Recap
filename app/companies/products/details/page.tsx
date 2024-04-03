import DetailsHeader from "@/app/components/productDetails/DetailsHeader";
import DetailsProduct from "@/app/components/productDetails/DetailsProduct";
import LegalDocument from "@/app/components/productDetails/LegalDocument";
import RateSheet from "@/app/components/productDetails/RateSheet";

export default function Details() {
  return (
    <div className="h-full">
      <DetailsHeader />
      <div className="w-full mx-auto mt-5 max-w-[500px] flex flex-col gap-10 ">
        <DetailsProduct />
        <LegalDocument />
        <RateSheet/>
      </div>
    </div>
  );
}
