import UpdateHeader from "@/app/components/productsUpdate/UpdateHeader";
import UpdateRateSheet from "@/app/components/productsUpdate/UpdateRateSheet";

export default function Update() {
  return (
    <div className="flex flex-col gap-4">
      <UpdateHeader />
      <UpdateRateSheet />
    </div>
  );
}
