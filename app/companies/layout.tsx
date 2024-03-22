"use client";
import React from "react";
import Slider from "../components/Slider";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen p-6 pl-0 gap-5">
      <div className="w-fit">
        <Slider />
      </div>

      <div className="flex-1">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
