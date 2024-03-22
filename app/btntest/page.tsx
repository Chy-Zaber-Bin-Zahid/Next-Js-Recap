import CvaClsxButton from "../components/CvaClsxButton";

export default function Btntest() {
  return (
    <div className="flex justify-center items-center h-screen gap-2">
      <CvaClsxButton intent="primary" disabled={true} size="large">
        btn1
      </CvaClsxButton>
      <CvaClsxButton intent="secondary" animate={true} size="small">
        btn2
      </CvaClsxButton>
    </div>
  );
}
