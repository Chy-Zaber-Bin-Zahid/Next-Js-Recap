import Image from "next/image";
import React from "react";

type Props = {};

const ChargerNavbar = (props: Props) => {
  return (
    <div className="flex justify-between items-center gap-2 py-2 px-4 shadow-md">
      <Image
        src="/images/Charger Navbar Logo.png"
        alt="Charger Navbar Logo"
        width={96.24}
        height={20.26}
      />
      <div className="flex gap-2 justify-center items-center">
        <Image
          src="/images/Menu Icon.png"
          alt="Menu Icon"
          width={20}
          height={20}
        />
        <h1 className="text-md font-sans text-[#115955]">Menu</h1>
      </div>
    </div>
  );
};

export default ChargerNavbar;
