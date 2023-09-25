import * as React from 'react';
import FlexCenter from '../CTECenter';

export interface CTEHeadingProps {
  children: string;
  className?:string;
}

export default function CTEHeading({ children ,className}: CTEHeadingProps) {
  return (
    <FlexCenter className='w-full py-3'>
      <span 
      className={`min-w-[173px] w-fit px-5 py-[6px] bg-[#FDF2B4] font-semibold 
      rounded-full text-[1.2rem] text-center ${className}`}>
        {children}
      </span>
    </FlexCenter>
  );
}
