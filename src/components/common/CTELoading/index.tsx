"use client"
import { Spin } from 'antd';
import * as React from 'react';

export interface  LoadingProps {
}

export default function Loading (props:  LoadingProps) {
  return (
    <div className='absolute w-full h-full flex justify-center items-center bg-white'>
      <Spin size="large" />
    </div>
  );
}
