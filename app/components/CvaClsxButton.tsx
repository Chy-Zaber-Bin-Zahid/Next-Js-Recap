"use client";
import { cva } from "class-variance-authority";
import clsx from "clsx";
import React, { ReactNode } from "react";

interface ButtonProps {
  intent: "primary" | "secondary";
  size: "small" | "medium" | "large";
  disabled?: boolean;
  animate?: boolean;
  onClick?: () => void;
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
  children: ReactNode;
}

const button = cva(["bg-[#3A83E9]", "rounded-md", "text-white"], {
  variants: {
    intent: {
      primary: ["bg-red-600", "border-transparent"],
      secondary: ["bg-[#3A83E9]"],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-2"],
      large: ["text-lg", "py-1", "px-2"],
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
