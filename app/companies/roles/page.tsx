"use client";

import RoleSlider from "@/app/components/RoleSlider";
import { useState } from 'react';

export default function Roles() {
  const [sliderStatus, setSliderStatus] = useState<boolean>(false);
  return (
    <div
      className="relative h-screen w-full overflow-hidden"
    >
      <RoleSlider sliderStatus={sliderStatus} setSliderStatus={setSliderStatus} />
    </div>
  );
}
