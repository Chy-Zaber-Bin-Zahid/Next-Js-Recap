"use client";
import { cva } from "class-variance-authority";
import clsx from "clsx";
import React, { ReactNode } from "react";

interface ButtonProps {
  intent:
    | "primary"
    | "secondary"
    | "slider"
    | "white"
    | "transparent"
    | "charge";
  size: "small" | "medium" | "large" | "transparent" | "charge";
  disabled?: boolean;
  animate?: boolean;
  onClick?: () => void;
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
  children: ReactNode;
}

const button = cva(["rounded-md"], {
  variants: {
    intent: {
      primary: ["bg-red-600", "border-transparent"],
      secondary: ["bg-[#3A83E9]", "text-white"],
      slider: ["bg-black", "text-white"],
      white: ["bg-[#F8F9FB]", "text-black"],
      transparent: ["bg-white", "text-black"],
      charge: ["bg-[#115955]", "text-white"],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
      large: ["text-lg", "py-1", "px-4"],
      transparent: ["text-md"],
      charge: ["text-base", "py-2"],
    },
  },
});

const CvaClsxButton = ({
  children,
  type,
  intent,
  onClick,
  size,
  disabled = false,
  animate = false,
  className,
}: ButtonProps) => {
  const CvaClasses = button({ intent, size });

  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={clsx(
        CvaClasses,
        className,
        { "cursor-not-allowed ": disabled === true },
        {
          "transition-all duration-300 hover:animate-pulse": animate === true,
        }
      )}
    >
      {children}
    </button>
  );
};

export default CvaClsxButton;
