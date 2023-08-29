"use client";
import React from "react";
import { Button } from "antd";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: any;
  type?: string;
  outline?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  loading?: boolean;
  [key: string]: any;
}

const CTEButton = ({
  children,
  className,
  onClick,
  type,
  outline,
  secondary,
  disabled,
  loading,
  ...props
}: Props) => {
  return (
    <Button
      onClick={onClick}
      className={`${className}
       h-[44px] flex justify-center items-center text-sm md:text-base
      font-bevn font-semibold text-[14px] rounded-[8px] tracking-wider shadow-none ${
        outline
          ? secondary
            ? "text-primary1 border-primary1 bg-transparent border-[1.5px]"
            : "bg-neutral2 text-neutral1 border-neutral3 hover:!border-neutral3 hover:!text-neutral1"
          : "bg-primary1 text-neutral2"
      }
      `}
      disabled={disabled || loading}
      loading={loading}
      type={outline ? "default" : "primary"}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CTEButton;
