import React,{ReactNode} from 'react';

export interface  FlexCenterProps {
  className?:string;
  children:ReactNode|string
}

export default function FlexCenter ({className,children}:  FlexCenterProps) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      {children}
    </div>
  );
}
