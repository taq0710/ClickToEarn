import FlexCenter from '@/components/common/CTECenter';
import Image from 'next/image';
import * as React from 'react';
import Coin from './coin';

export interface MissionCardProps {
  image: string;
  code: number;
  coin: number;
  imageAlt?: string;
}

export default function MissionCard({
  image,
  code,
  coin,
  imageAlt = 'click to earn mission',
}: MissionCardProps) {
  console.log("11111111111")
  return (
    <div className="w-full h-fit flex flex-col gap-y-4">
      <div className="w-full h-fit rounded-xl overflow-hidden">
        <Image
          alt={imageAlt}
          src={image}
          width={513}
          height={500}
          priority
          className="mr-0"
        />
      </div>
      <div className="font-inter">
        <div className="px-4 flex justify-between items-center">
          <h5 className="text-lg uppercase m-0 font-medium">Nhiệm vụ</h5>
          <span className="uppercase text-gray1 font-semibold text-sm">
            CODE {code}
          </span>
        </div>
        <FlexCenter className="gap-x-2 justify-between">
          <span className="w-full font-medium text-sm bg-[#FDF4BB] rounded-full py-1 px-5 text-truncate-1">
            Click link + Subscribe + Comment
          </span>
          <Coin amount={coin} />
        </FlexCenter>
      </div>
    </div>
  );
}
