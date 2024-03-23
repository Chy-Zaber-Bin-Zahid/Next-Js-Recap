"use client";
import React from "react";
import Slider from "../components/Slider";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen gap-5">
      <div className="w-fit h-full overflow-y-auto">
        <Slider />
      </div>

      <div className="flex-1">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
