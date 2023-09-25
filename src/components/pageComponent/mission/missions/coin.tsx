import FlexCenter from '@/components/common/CTECenter';
import Image from 'next/image';
import * as React from 'react';
import CoinImage from '/public/images/coin.png';
export interface CoinProps {
  amount: number;
  variant?: 'outline' | 'container';
}

export default function Coin({ amount, variant = 'container' }: CoinProps) {
  return (
    <FlexCenter
      className={`${
        variant === 'container'
          ? 'bg-[#F9D9164A] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.2)] '
          : 'bg-white border-primary6 border-[1px] '
      } text-primary7 font-semibold text-[1.5em] min-w-fit w-fit 
      px-4 py-[5px] rounded-xl font-inter flex gap-x-[2px] `}
    >
      <span>{amount}c</span>
      <Image alt="coin click to earn " src={CoinImage} width={30} />
    </FlexCenter>
  );
}
